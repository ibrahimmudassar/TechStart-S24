from datetime import timedelta, datetime
from random import randint, randrange, uniform

from flask import Flask, Response, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

cache = {}


@app.before_request
def handle_preflight():
    if request.method == "OPTIONS":
        res = Response()
        res.headers["X-Content-Type-Options"] = "*"
        return res


@app.route("/get_hospitals", methods=["GET"])
@cross_origin()
def hello():

    return [
        {"name": "Capital Health Regional Medical Center", "link": "capital"},
        {"name": "CareWell Health Medical Center", "link": "carewell"},
        {"name": "Centra State Medical Center", "link": "centra"},
        {"name": "Chilton Medical Center", "link": "chilton"},
        {"name": "Christ Hospital", "link": "christ"},
        {"name": "Clara Maass Medical Center", "link": "clara"},
        {"name": "Community Medical Center", "link": "community"},
        {"name": "Cooper University Hospital", "link": "cooper"},
        {"name": "Jersey City Medical Center", "link": "jersey_city"},
        {"name": "Jersey Shore University Medical Center", "link": "jersey_shore"},
    ]


# @app.route("/get_service_history", methods=["GET"])
# @cross_origin()
def service_history():

    final = []

    for _ in range(randint(10, 21)):
        final.append(
            {
                "date": random_date(
                    datetime.strptime("1/1/2008", "%m/%d/%Y"),
                    datetime.now(),
                ),
                "price": round(uniform(100, 10000), 2),
            }
        )

    return final


def random_date(start, end):
    """
    This function will return a random datetime between two datetime
    objects.
    """
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    new = start + timedelta(seconds=random_second)

    return new.isoformat()


@app.route("/get_hospital_services", methods=["GET"])
@cross_origin()
def services():

    final = [
        {"name": "Abdomen Ultrasound", "price": 800.0},
        {"name": "Brain MRI", "price": 2370.0},
        {"name": "Chest X-ray", "price": 400.0},
        {"name": "Head CAT Scan", "price": 1070.0},
        {"name": "Knee X-ray", "price": 220.0},
        {"name": "Pelvic Ultrasound", "price": 480.0},
        {"name": "Complete Blood Count", "price": 31.0},
        {"name": "Comprehensive Metabolic Panel", "price": 159.0},
        {"name": "Lipid Profile", "price": 149.0},
        {"name": "Urinalysis", "price": 38.0},
        {"name": "Hemoglobin A1C", "price": 94.0},
        {"name": "Thyroid Stimulating Hormone Test", "price": 115.0},
        {"name": "Vitamin D Test", "price": 82.0},
        {"name": "Strep Throat Test", "price": 65.0},
        {"name": "Influenza Test", "price": 34.0},
        {"name": "COVID-19 PCR Test", "price": 116.0},
        {"name": "Fine Needle Aspiration", "price": 357.0},
        {"name": "Skin Abscess Drainage", "price": 321.0},
        {"name": "Nail Plate Removal", "price": 293.0},
        {"name": "ACL Repair", "price": 9446.0},
    ]

    for i in final:
        i["history"] = service_history()

    return final
