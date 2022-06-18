import React, { Fragment, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { descriptionActions } from "../../action/description.action";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify"; 

const Page1 = (props) => {
    const [levelDesc, setLevelDesc] = useState(_.get(props, "data.dec", ""));
    const [level, setLevel] = useState(_.get(props, "data.level", ""));

    useEffect(() => {
      props.getLevel();
  }, []);

    useEffect(() => {
      // failure and success and display common notification 
      props.isSuccess && props.getData ? toast.success("Success Message", { position: toast.POSITION.TOP_CENTER }) : props.getData ? toast.error("error Message: API faild", { position: toast.POSITION.TOP_CENTER }) : "";
  }, [props.isSuccess, props.getData]);

  const handleSubmit= (e) => {
    props.addDescription(levelDesc, level);
    e.preventDefault();
  }
  
    return (
      <Fragment>
        <ToastContainer />
          <TextField fullWidth id="outlined-basic" label="Level" variant="outlined" size="small" style={{width: "50%"}}  value={level} onChange={e => setLevel(e.target.value)}/>

          <TextField
            variant="outlined"
            multiline
            minRows={5}
            maxRows={10}
            fullWidth
            style={{ marginTop: "20px" }}
            label="Description"
            value={levelDesc}
            onChange={e => setLevelDesc(e.target.value)}
          />

          <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", marginTop: "20px"}} onClick={handleSubmit}>Add</Button>
      </Fragment>
    )
  }

  function mapStateToProps(state) {
    const { data, getData, isSuccess } = state.description;
    return { data, getData, isSuccess };
}

const mapDispatchToProps = (dispatch) => ({
    addDescription: (levelDesc, level) => dispatch(descriptionActions.addDescription(levelDesc, level)),
    getLevel: () => dispatch(descriptionActions.getLevel())
});

//connect a React component to a Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Page1);