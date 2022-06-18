import React, {Fragment} from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Page2 = (props) => {
    const [levelDesc, setLevelDesc] = useState();
    const [level, setLevel] = useState();

    const handleSubmit= (e) => {
      props.addDescription(levelDesc, level)
      e.preventDefault();
    }
  
    return (
      <Fragment>
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

          <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", marginTop: "20px"}}>Add</Button>
      </Fragment>
    )
  }


export default Page2;