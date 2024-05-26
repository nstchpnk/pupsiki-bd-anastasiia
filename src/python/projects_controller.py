from app import app
from projects_model import Projects
from flask import request, jsonify

projects = Projects()

@app.route("/projects", methods=["GET"])
def get_all_projects():
    limit = request.args.get("limit", 10, type=int)
    offset = request.args.get("offset", 0, type=int)
    result = projects.get_all_projects(limit, offset)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/projects/count", methods=["GET"])
def get_projects_count():
    result = projects.get_projects_count()
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/projects/search", methods=["GET"])
def search_projects_by_title():
    title = request.args.get("title", "")
    result = projects.search_projects_by_title(title)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/project/<int:id>", methods=["GET"])
def get_project_by_id(id):
    result = projects.get_project_by_id(id)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/project/add", methods=["POST"])
def add_project():
    result = projects.add_project(request.form)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/project/patch", methods=["PATCH"])
def patch_project():
    result = projects.patch_project(request.form)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/project/delete/<int:id>", methods=["DELETE"])
def delete_project(id):
    result = projects.delete_project(id)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)

@app.route("/project/<int:id>/status", methods=["PATCH"])
def update_project_status(id):
    status = request.form.get("status")
    if not status:
        return jsonify({"message": "Missing status parameter", "error": "Bad Request", "status_code": 400}), 400
    result = projects.update_project_status(id, status)
    if "status_code" in result:
        return jsonify(result), result["status_code"]
    return jsonify(result)