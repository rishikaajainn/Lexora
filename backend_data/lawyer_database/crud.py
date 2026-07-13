from .database import get_connection


def add_lawyer(
        full_name,
        email,
        mobile_number,
        office_address,
        bar_council_enrolment_number,
        state_bar_council,
        years_of_experience,
        primary_practice_area,
        bar_council_id_card,
        certificate_of_practice,
    ):

        conn = get_connection()

        try:
            cursor = conn.cursor()

            cursor.execute("""
            INSERT INTO lawyers(
                full_name,
                email,
                mobile_number,
                office_address,
                bar_council_enrolment_number,
                state_bar_council,
                years_of_experience,
                primary_practice_area,
                bar_council_id_card,
                certificate_of_practice
            )
            VALUES(?,?,?,?,?,?,?,?,?,?)
            """, (
                full_name,
                email,
                mobile_number,
                office_address,
                bar_council_enrolment_number,
                state_bar_council,
                years_of_experience,
                primary_practice_area,
                bar_council_id_card,
                certificate_of_practice,
            ))

            conn.commit()

        finally:
            conn.close()

def get_all_lawyers():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM lawyers")

    lawyers = cursor.fetchall()

    conn.close()

    return lawyers

def get_verified_lawyers():

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        SELECT * FROM lawyers
        WHERE verification_status = 'Approved'
    """)

    lawyers = cursor.fetchall()

    conn.close()

    return lawyers

def get_lawyers_by_practice_area(practice_area):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM lawyers
        WHERE primary_practice_area = ?
        AND verification_status = 'Approved'
    """, (practice_area,))

    lawyers = cursor.fetchall()

    conn.close()

    return lawyers

def get_lawyers_by_state(state):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM lawyers
        WHERE state_bar_council = ?
        AND verification_status = 'Approved'
    """, (state,))

    lawyers = cursor.fetchall()

    conn.close()

    return lawyers


def get_lawyers(practice_area, state):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM lawyers
        WHERE primary_practice_area = ?
        AND state_bar_council = ?
        AND verification_status = 'Approved'
    """, (practice_area, state))

    lawyers = cursor.fetchall()

    conn.close()

    return lawyers

def approve_lawyer(id):

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
        UPDATE lawyers
        SET verification_status='Approved'
        WHERE id=?
    """,(id,))

    conn.commit()

    conn.close()






