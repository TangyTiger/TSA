from app import app
from flask import request, session, jsonify, render_template, redirect, abort
import json
import stripe, os

stripe.api_key = 'sk_test_51Kcy9ADb39iQQocLnUoJnhbP9z8wx8KMkJq1fNNKK303iFstCHKaPRPGBhQ90TqoZagUpQjiWEdhGR2K30iP9QMI00bAhXmBYv'

def calculate_order_amount_1(items):
    # Replace this constant with a calculation of the order's amount
    # Calculate the order total on the server to prevent
    # people from directly manipulating the amount on the client
    #donation = request.form['donationAmount']
    return 1500

@app.route('/try_pay', methods=['GET'])
def try_pay():
    return render_template("checkout.html")

@app.route('/create-payment-intent', methods=['POST', 'GET'])
def create_payment():
    try:
        data = json.loads(request.data)
        #print(data)
        #donation = request.args.get("donationAmount", type=str)
        #print(donation)
        # Create a PaymentIntent with the order amount and currency
        intent = stripe.PaymentIntent.create(
            amount=calculate_order_amount_1(data['items']),
            currency='usd',
            automatic_payment_methods={
                'enabled': True,
            },
        )
        return jsonify({
            'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403

products = {
    'megatutorial': {
        'name': 'The Flask Mega-Tutorial',
        'price': 3900,
    },
    'support': {
        'name': 'Python 1:1 support',
        'price': 20000,
        'per': 'hour',
    },
}


with open('environmental.txt') as f:
    environmentalPosts = json.load(f)
with open('social.txt') as f:
    socialPosts = json.load(f)
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



@app.route('/viewEnvironmentalSubjects')
def viewEnvironmental():
    return render_template("viewEnvironmental.html", environmentalPosts=environmentalPosts, products=products)

@app.route('/viewSocialSubjects')
def viewSocial():
    return render_template("viewSocial.html", socialPosts=socialPosts)

@app.route('/viewEconomicSubjects')
def viewEconomic():
    return render_template("viewEconomic.html", economicPosts=economicPosts)

@app.route('/viewOtherSubjects')
def viewOther():
    return render_template("viewOther.html", otherPosts=otherPosts)




@app.route('/getEnvironmentalPost')
def getEnvironmentalPost():
   print(request.args.get("id"))
   data = int(request.args.get("id"))
   for i in environmentalPosts:
       if i["id"] == data:
           return jsonify(i)

@app.route('/getSocialPost')
def getSocialPost():
   print(request.args.get("id"))
   data = int(request.args.get("id"))
   for i in socialPosts:
       if i["id"] == data:
           return jsonify(i)

@app.route('/getEconomicPost')
def getEconomicPost():
   print(request.args.get("id"))
   data = int(request.args.get("id"))
   for i in economicPosts:
       if i["id"] == data:
           return jsonify(i)

@app.route('/getOtherPost')
def getOtherPost():
   print(request.args.get("id"))
   data = int(request.args.get("id"))
   for i in otherPosts:
       if i["id"] == data:
           return jsonify(i)


@app.route('/view')
def view():
    subject = request.args.get("subject")
    filteredSubjects = []
    for i in environmentalPosts:
        if i["subject"] == subject:
            filteredSubjects.append(i)
    return render_template('gallery.html')

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
    with open('ids.txt', 'w') as convert_file:
        convert_file.write(json.dumps({'preid': preid}, indent=5))
    return redirect("/home")