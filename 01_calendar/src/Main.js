import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import "./style.css";

const Main = (props) => {

    return (
        <div>
            <div className="icon2">
                <Switch
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>
                <div className="icon">
                    <Fab color="secondary" aria-label="edit" onClick={() => {
                        props.history.push('/addplan')
                        }}>
                    <EditIcon />
                    </Fab>
                    
                </div>
            
            <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[
                { title: 'event 1', date: '2021-02-25' },
                { title: 'event 2', date: '2021-04-02' }
            ]}
            />
            
                
        </div>
    );
    };


export default Main;