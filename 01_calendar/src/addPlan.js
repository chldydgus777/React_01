import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import "./style.css";

const addPlan = (props) => {
    

    return (
<div className="App">
<div className="container">
<h3> 일시 </h3>
        <TextField
        id="datetime-local"
        type="datetime-local"
        label="일정"
        defaultValue="0000-00-00T00:00"
        InputLabelProps={{
        shrink: true,
        }}
        />

        <div className="desc">
        <h3> 일정제목 </h3>
        <TextField
            id="standard-textarea"
            label="이벤트추가"
            placeholder="일정 제목"
            multiline
        />
        </div>
            <div className="btn">
                <Button className="save_btn" color="primary">저장하기 !</Button>
                <div className="goback_btn">
                    <Button onClick={() => {
                    props.history.goBack()
                    }}>첫 화면으로 ! </Button>
                </div>
            </div>
    </div>
    
</div>
        
            )
}

export default addPlan;