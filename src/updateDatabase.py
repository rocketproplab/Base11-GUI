import sqlite3
from sqlite3 import Error

# CREATE TABLE telemetry (
#      timestamp REAL PRIMARY KEY,
#      connectionStatus INTEGER NOT NULL,
#      PT1_ss INTEGER NOT NULL,
#      PT2_ss INTEGER NOT NULL,
#      PT3_ss INTEGER NOT NULL,
#      PT4_ss INTEGER NOT NULL,
#      PT5_ss INTEGER NOT NULL,
#      PT6_ss INTEGER NOT NULL,
#      PT7_ss INTEGER NOT NULL,
#      PT8_ss INTEGER NOT NULL,
#      PT1_readout REAL NOT NULL,
#      PT2_readout REAL NOT NULL,
#      PT3_readout REAL NOT NULL,
#      PT4_readout REAL NOT NULL,
# 
#      PT5_readout REAL NOT NULL,
#      PT6_readout REAL NOT NULL,
#      PT7_readout REAL NOT NULL,
#      PT8_readout REAL NOT NULL,
#      TC1 REAL NOT NULL,
#      TC2 REAL NOT NULL,
#      TC3 REAL NOT NULL,
#      TC4 REAL NOT NULL,
#      TC5 REAL NOT NULL,
#      TC6 REAL NOT NULL,
#      TC7 REAL NOT NULL,
#      TC8 REAL NOT NULL,
#      alt REAL NOT NULL,
#      xTilt REAL NOT NULL,
#      yTilt REAL NOT NULL,
#      lat REAL NOT NULL,
#      lon REAL NOT NULL,
#      FS INTEGER NOT NULL,
#      PS_drogue INTEGER NOT NULL,
#      PS_main INTEGER NOT NULL,
#      velocity REAL NOT NULL
# );


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)
 
    return conn
 
 
def update_task(conn, task):
    """
    update priority, begin_date, and end date of a task
    :param conn:
    :param task:
    :return: project id
    """
    sql = ''' UPDATE tasks
              SET priority = ? ,
                  begin_date = ? ,
                  end_date = ?
              WHERE id = ?'''
    cur = conn.cursor()
    cur.execute(sql, task)
    conn.commit()
 
 def get_data(serial):
     """
     Reads latest line of data from serial stream, validates & cleans it, and
     returns it as a tuple.
     
     Parameters:
     serial (string): string representation of serial port command box is
     writing to
     
     Returns:
     parcel (tuple): a tuple representation of the telemetry data, with form:
     (timestamp, connectionStatus, PT1-8_ss, PT1-8_readouts, TC1-8, alt, lat,
     lon, FS, PS_drogue, PS_main, velocity)
     """
     
     

def update_persistent(parcel, db):
    """
    Updates telemetry fields in persistent table of database.
    
    Parameters:
    parcel (tuple): latest telemetry data, separated by value
    db (sqlite3 connection): database which contains table for persistent values
    
    Returns:
    None
    """
    
def add_to_log(parcel, db):
    """
    Adds latest data to running log of telemetry data.
    
    Parameters:
    parcel (tuple): latest telemetry data, separated by value
    db (sqlite3 connection): database which to dump data into
    
    Returns:
    None
    """
    
 
def main():
    while True:
        db = create_connection(db_file)
        parcel = get_data(serial)
        update_persistent(parcel, db)
        add_to_log(parcel, db)
        time.sleep(1)
    # database = r"./data.db"
    # 
    # # create a database connection
    # conn = create_connection(database)
    # with conn:
    #     update_task(conn, (2, '2015-01-04', '2015-01-06', 2))
    # 
 
if __name__ == '__main__':
    main()
