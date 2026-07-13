from fastapi import FastAPI, UploadFile, File, Form
import shutil
import os
from fastapi.middleware.cors import CORSMiddleware

from .crud import add_lawyer, get_all_lawyers

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create upload folders if they don't exist
os.makedirs("lawyer_database/uploads/bar_council_ids", exist_ok=True)
os.makedirs("lawyer_database/uploads/certificates", exist_ok=True)


@app.post("/lawyers/register")
async def register_lawyer(

    full_name: str = Form(...),
    email: str = Form(...),
    mobile_number: str = Form(...),
    office_address: str = Form(...),

    bar_council_enrolment_number: str = Form(...),
    state_bar_council: str = Form(...),
    years_of_experience: int = Form(...),
    primary_practice_area: str = Form(...),

    bar_council_id_card: UploadFile = File(...),
    certificate_of_practice: UploadFile = File(...),

):

    # Save Bar Council ID

    bar_id_path = (
        f"lawyer_database/uploads/bar_council_ids/{bar_council_id_card.filename}"
    )

    with open(bar_id_path, "wb") as buffer:
        shutil.copyfileobj(bar_council_id_card.file, buffer)

    # Save Certificate

    certificate_path = (
        f"lawyer_database/uploads/certificates/{certificate_of_practice.filename}"
    )

    with open(certificate_path, "wb") as buffer:
        shutil.copyfileobj(certificate_of_practice.file, buffer)

    # Store in database

    add_lawyer(

        full_name,
        email,
        mobile_number,
        office_address,
        bar_council_enrolment_number,
        state_bar_council,
        years_of_experience,
        primary_practice_area,
        bar_id_path,
        certificate_path,

    )

    return {
        "message": "Lawyer registered successfully!"
    }


@app.get("/lawyers")
def get_lawyers():

    lawyers = get_all_lawyers()

    return [dict(lawyer) for lawyer in lawyers]