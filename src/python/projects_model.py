import mysql.connector

class Projects:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost", user="root", passwd="chepeniuk05", database="pupsiki")
            print("Successfully connected to the database!")
            self.cur = self.con.cursor(dictionary=True)
        except mysql.connector.Error as e:
            print("Failed to connect to the database:", str(e))

    def get_all_projects(self, limit=10, offset=0):
        try:
            self.cur.execute("SELECT * FROM project LIMIT %s OFFSET %s", (limit, offset))
            result = self.cur.fetchall()
            if self.cur.rowcount == 0:
                return {"message": "There are no projects", "error": "Not Found", "status_code": 404}
            return result
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def get_projects_count(self):
        try:
            self.cur.execute("SELECT COUNT(*) as count FROM project")
            result = self.cur.fetchone()
            return {"count": result['count']}
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def search_projects_by_title(self, title):
        try:
            search_query = f"%{title}%"
            self.cur.execute("SELECT * FROM project WHERE title LIKE %s", (search_query,))
            result = self.cur.fetchall()
            if self.cur.rowcount == 0:
                return {"message": "No projects found with the given title", "error": "Not Found", "status_code": 404}
            return result
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def get_project_by_id(self, id):
        if not str(id).isdigit():
            return {"message": "Invalid project id", "error": "Bad Request", "status_code": 400}
        try:
            self.cur.execute("SELECT * FROM project WHERE id = %s", (id,))
            result = self.cur.fetchall()
            if self.cur.rowcount == 0:
                return {"message": "There is no project with such id", "error": "Not Found", "status_code": 404}
            return result
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def add_project(self, data):
        data = dict(data)
        required_keys = {'title', 'description', 'status'}
        if not required_keys.issubset(data):
            return {"message": "Invalid or missing keys", "error": "Bad Request", "status_code": 400}
        try:
            query = "INSERT INTO project (Id, Title, Description, Status) VALUES (%s, %s, %s, %s)"
            values = (data['id'], data['title'], data['description'], data['status'])
            self.cur.execute(query, values)
            self.con.commit()
            if self.cur.rowcount > 0:
                return {"message": "Successfully added to database", "status_code": 200}
            else:
                return {"message": "Project was not added to database", "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": "Failed to add project: " + str(e), "error": "Database Error", "status_code": 500}

    def delete_project(self, id):
        if not str(id).isdigit():
            return {"message": "Invalid project id", "error": "Bad Request", "status_code": 400}

        try:
            self.cur.execute("DELETE FROM sprint WHERE Project_Id = %s", (id,))
            self.cur.execute("DELETE FROM team WHERE Project_Id = %s", (id,))
            self.cur.execute("DELETE FROM project WHERE Id = %s", (id,))
            self.con.commit()

            if self.cur.rowcount > 0:
                return {"message": "Project was successfully deleted", "status_code": 204}
            else:
                return {"message": "Nothing to delete", "error": "Not Found", "status_code": 404}
        except Exception as e:
            self.con.rollback()
            return {"message": "Failed to delete project", "error": str(e), "status_code": 500}

    def patch_project(self, data):
        data = dict(data)
        if 'id' not in data:
            return {"message": "Missing project id", "error": "Bad Request", "status_code": 400}
        project_id = data['id']
        if not data:
            return {"message": "No data provided to update", "error": "Bad Request", "status_code": 400}

        try:
            self.cur.execute("SELECT * FROM project WHERE Id = %s", (project_id,))
            if self.cur.rowcount == 0:
                return {"message": "Project not found", "error": "Not Found", "status_code": 404}

            set_clause = ', '.join([f"{key} = %s" for key in data if key != 'id'])
            values = [data[key] for key in data if key != 'id']
            values.append(project_id)
            query = f"UPDATE project SET {set_clause} WHERE Id = %s"
            self.cur.execute(query, values)
            self.con.commit()

            if self.cur.rowcount > 0:
                return {"message": "Successfully updated project", "status_code": 200}
            else:
                return {"message": "No changes made to project", "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": "Failed to update project: " + str(e), "error": "Database Error", "status_code": 500}

    def update_project_status(self, id, status):
        if not str(id).isdigit():
            return {"message": "Invalid project id", "error": "Bad Request", "status_code": 400}
        try:
            self.cur.execute("UPDATE project SET status = %s WHERE id = %s", (status, id))
            self.con.commit()
            if self.cur.rowcount > 0:
                return {"message": "Successfully updated project status", "status_code": 200}
            else:
                return {"message": "No changes made to project status", "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": "Failed to update project status: " + str(e), "error": "Database Error", "status_code": 500}
