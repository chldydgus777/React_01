import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";


import {Grid, Image, Text} from '../elements'
const Post = (props) => {

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape ="circle" src={props.src}/>
                    <Text bold>{props.user_info.user_name} </Text>
                    <Text bold>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text bold>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape="rectangle" scr={props.src} />
                </Grid>
                <Grid padding="16px">
                <Text bold>댓글 {props.comment_cnt}개</Text>
                </Grid>
            <div> user profile / user name / insert_dt</div>
            <div> contents </div>
            <div> image </div>
            <div> contents cnt </div>
            </Grid>
        </React.Fragment>
    ) 
}


Post.defaultProps ={
    user_info: {
        user_name: "yhchoi",
        user_profile:"https://lh3.googleusercontent.com/-oHs2LQ3i2NU/YF7KwFXNoNI/AAAAAAAAPFM/CNmmNmpO7_EzjeQaaCcwZR3qfU8vZfSTQCLcBGAsYHQ/0.jpg"
    },
    image_url:"https://lh3.googleusercontent.com/-oHs2LQ3i2NU/YF7KwFXNoNI/AAAAAAAAPFM/CNmmNmpO7_EzjeQaaCcwZR3qfU8vZfSTQCLcBGAsYHQ/0.jpg",
    contents: '푸들이네요 !',
    comment_cnt : 10,
    insert_dt : "2021-03-27 10:00:00",
}

export default Post;