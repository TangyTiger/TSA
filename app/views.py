from app import app
from flask import request, session, jsonify, render_template, redirect
import json

# discussionPosts = [
#     {"title": " who r u", "name": "Sarthak Lodha", "id": 1, "replies": ["test", "test2"]},
#     {"title": " test num 2", "name": "aditya shah", "id": 2},
#     {"title": "test number 3", "name": "Sarthak Lodha", "id": 3},
#     {"title": " who r u", "name": "Sarthak Lodha", "id": 4}
# ]
#
# schoolSupplyPosts = [
#     {
#         "title": "Need screwdriver",
#         "description": "jioadfjilo jioad aoegjg oszh h a;ofiui t paiwfr hioas",
#         "name": "Aditya Shah",
#         "id": 5,
#         "email": "adityashah@adityashah.com",
#         "phone": 1028561933
#     }
# ]
# carpoolPosts = []
# tutoringPosts = [
#     {
#         "title": "Math Help",
#         "description": "some stuff here",
#         "email": "asdf@gmail.com",
#         "fee": "18",
#         "phone": 1234567890, "id": 6,
#         "subject": "math"
#     },
#     {
#         "title": "Science Help",
#         "description": "a description",
#         "email": "jdoe@gmail.com",
#         "fee": "20",
#         "phone": 1029384756, "id": 7,
#         "subject": "science"
#     }
# ]


with open('environmental.txt') as f:
    environmentalPosts = json.load(f)
with open('social.txt') as f:
    socialPosts = json.load(f)
with open('discussion.txt') as f:
    discussionPosts = json.load(f)
with open('tutor.txt') as f:
    tutoringPosts = json.load(f)
with open('economic.txt') as f:
  economicPosts = json.load(f)
with open('other.txt') as f:
  otherPosts = json.load(f)
with open('ids.txt') as f:
   ids = json.load(f)

preid = ids['preid']

@app.route('/post', methods=['GET'])
def postpg():
    return render_template('post.html')


@app.route('/signup', methods=['GET'])
def signuppg():
    return render_template('signup.html')

@app.route('/', methods=['GET'])
@app.route('/signin', methods=['GET'])
def signinpg():
    return render_template('signin.html')


@app.route('/home', methods=['GET'])
def homepg():
    return render_template('index.html')


@app.route('/submitpost')
def submitpost():
    global preid
    preid += 1
    form = request.args
    post = {
        "description": form.get('description'),
        "title": form.get("title"),
        "type": form.get("type"),
        "name": form.get("name"),
        "id": preid
    }
    if post["type"] == "Environmental":
        post["name"] = form.get("name")
        post["email"] = form.get("email")
        post['lat'] = form.get('lat')
        post['lng'] = form.get('lng')
        post['subject'] = form.get('subject')
        post['fee'] = form.get('fee')
        environmentalPosts.append(post)
        print(environmentalPosts)
    if post["type"] == "Social Inequality":
        post["name"] = form.get("name")
        post["email"] = form.get("email")
        post['lat'] = form.get('lat')
        post['lng'] = form.get('lng')
        post['subject'] = form.get('subject')
        post['fee'] = form.get('fee')
        socialPosts.append(post)
        print(socialPosts)
    if post["type"] == "Economic Inequality":
        post["name"] = form.get("name")
        post["email"] = form.get("email")
        post['lat'] = form.get('lat')
        post['lng'] = form.get('lng')
        post['subject'] = form.get('subject')
        post['fee'] = form.get('fee')
        economicPosts.append(post)
        print(socialPosts)
    if post["type"] == "Other":
        post["name"] = form.get("name")
        post["email"] = form.get("email")
        post['lat'] = form.get('lat')
        post['lng'] = form.get('lng')
        post['subject'] = form.get('subject')
        post['fee'] = form.get('fee')
        otherPosts.append(post)
        print(otherPosts)
    print(post)
    save()
    return redirect("/save")


@app.route('/viewTutorsSubjects')
def viewtutors():
    return render_template("viewTutorsSubjects.html")


@app.route('/viewEnvironmentalSubjects')
def viewEnvironmental():
    print(environmentalPosts)
    return render_template("viewEnvironmental.html", environmentalPosts=environmentalPosts)

@app.route('/viewSocialSubjects')
def viewSocial():
    topic = request.args.get("title")
    return render_template("viewSocial.html", socialPosts=socialPosts)


@app.route('/tutorViewing')
def viewtutorslist():
    subject = request.args.get("subject")
    filteredSubjects = []
    for i in tutoringPosts:
        if i["subject"] == subject:
            filteredSubjects.append(i)
    return render_template("tutorViewing.html", tutorPosts=filteredSubjects)


@app.route('/getTutorPost')
def getTutorPost():
    data = int(request.args.get("id"))
    print(data)
    for i in tutoringPosts:
        if i["id"] == data:
            return jsonify(i)


@app.route('/getEnvironmentalPost')
def getEnvironmentalPost():
   print(request.args.get("id"))
   data = int(request.args.get("id"))
   for i in environmentalPosts:
       if i["id"] == data:
           return jsonify(i)


@app.route('/discussionsThread')
def answerQuestions():
    question = int(request.args["id"])
    for i in discussionPosts:
        print(question)
        if i["id"] == question:
            return render_template("discussionThreads.html", post=i)


@app.route('/viewAllDiscussions')
def viewAllDiscussion():
    return render_template("viewAllDiscussions.html", discussionPosts=discussionPosts)


#@app.route('/viewAllSupplies')
#def viewAllSupplies():
#    return render_template("viewAllSupplies.html", supplies=schoolSupplyPosts)


#@app.route('/supplyRespond')
#def supplyRespond():
#    supply = int(request.args.get("id"))
#    for i in schoolSupplyPosts:
#        if i["id"] == supply:
#            return render_template("supplyRespond.html", post=i)


@app.route('/sendReply')
def sendReply():
    reply = request.args.get("reply")
    id = int(request.args.get("id"))
    for i in discussionPosts:
        if i["id"] == id:
            i['replies'].insert(0, reply)
            return redirect("/discussionsThread?id=" + str(id))


@app.route('/view')
def viewAllEnvironmental():
    subject = request.args.get("subject")
    filteredSubjects = []
    for i in environmentalPosts:
        if i["subject"] == subject:
            filteredSubjects.append(i)
    return render_template('gallery.html', tutorPosts=filteredSubjects)

@app.route('/save')
def save():
    with open('other.txt', 'w') as convert_file:
        convert_file.write(json.dumps(otherPosts, indent=5))
    with open('environmental.txt', 'w') as convert_file:
        convert_file.write(json.dumps(environmentalPosts, indent=5))
    with open('social.txt', 'w') as convert_file:
        convert_file.write(json.dumps(socialPosts, indent=5))
    with open('economic.txt', 'w') as convert_file:
        convert_file.write(json.dumps(economicPosts, indent=5))
    with open('tutor.txt', 'w') as convert_file:
        convert_file.write(json.dumps(tutoringPosts, indent=5))
    with open('ids.txt', 'w') as convert_file:
        convert_file.write(json.dumps({'preid': preid}, indent=5))
    return redirect("/home")