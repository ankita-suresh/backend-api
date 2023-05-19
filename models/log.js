const db = require('../util/database')

module.exports = class Log{
    constructor(CallNumber, CreationDate, AssignedDate, AssignedTo, CloseDate, CallStatus ){
        this.CallNumber= CallNumber;
        this.CreationDate= CreationDate;
        this.AssignedDate= AssignedDate;
        this.AssignedTo= AssignedTo;
        this.CloseDate= CloseDate;
        this.CallStatus= CallStatus;
    }
    static fetchAll(){
             //   console.log( db.execute('SELECT call_number,creation_date FROM log.log'));

        return db.execute('SELECT * FROM log.log');
            

    }

    static post(data){
        console.log(data.assigned_date);
   
        return db.execute('INSERT INTO log(call_number, creation_date, assigned_date, assigned_to, close_date, call_status) VALUES (?, ? , ? , ? , ? , ?)', [data.call_number,data.creation_date,data.assigned_date,data.assigned_to,data.close_date,data.call_status] );
        
    }
};