import React, { Component } from 'react';
import AppBar from '../_components/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../_components/nav'; 
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { threatScenarioAction } from '../_actions';
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const styles = theme => ({

    root: {
        flexGrow: 1,
      },

  contentRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class AddThreatScenario extends Component {
  
    handleChange = prop => event => {
        const { dispatch } = this.props;
        dispatch(threatScenarioAction.onChangeProps(prop, event));
    };

    componentDidMount() {
        const { match : {params } } = this.props;

        if(params.id){
            const { dispatch } = this.props;
            console.log(params.id);
            dispatch(threatScenarioAction.getThreatScenarioById(params.id));
        }
    }


    handleClick(event){
        const { match : {params } } = this.props;
        const { dispatch } = this.props;
            
        let payload={
            id: this.props.threatScenario.id,
            title: this.props.threatScenario.title,
            description: this.props.threatScenario.description,
            relatedAsset: this.props.threatScenario.relatedAsset,
            clasification: this.props.threatScenario.clasification,
            impact: this.props.threatScenario.impact,
            riskLevel: this.props.threatScenario.riskLevel,
            likelihood: this.props.threatScenario.likelihood
        }

        if(params.id){
            dispatch(threatScenarioAction.editThreatScenarioInfo(params.id, payload));
        }else{
            dispatch(threatScenarioAction.createThreatScenario(payload));
        }
    }


   render() {
     const { classes } = this.props;
     const { match : {params } } = this.props;
     //console.log(this.props.threatScenario);
     

     function InsertText(props) {
        return <Typography>{'Add New Threat Scenario'}</Typography>;
      }
      
      function EditText(props) {
          return <Typography>{'Edit Threat Scenario'}</Typography>;
      }


    function SegHeader() {
        if(params.id){
            return <EditText />;
        }
        return <InsertText />;
    }
     
      return (
        
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <SegHeader />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">                            
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <div>
                            <Paper className={classes.contentRoot} elevation={1}>
                                <form className={classes.container}>
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="title"
                                                label="Title"
                                                className={classes.textField}
                                                value={this.props.threatScenario.title}
                                                onChange={this.handleChange('title')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="description"
                                                label="Description"
                                                className={classes.textField}
                                                value={this.props.threatScenario.description}
                                                onChange={this.handleChange('description')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="relatedAsset"
                                                label="Related Asset"
                                                className={classes.textField}
                                                value={this.props.threatScenario.relatedAsset}
                                                onChange={this.handleChange('relatedAsset')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="clasification"
                                                label="Clasification"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.threatScenario.clasification}
                                                onChange={this.handleChange('clasification')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                id="impact"
                                                label="Impact"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.threatScenario.impact}
                                                onChange={this.handleChange('impact')}
                                                margin="normal"
                                            />
                                        </Grid>
                                        {/* <Grid item xs={3}>
                                            <TextField
                                                id="riskLevel"
                                                label="RiskLevel"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.threatScenario.riskLevel}
                                                onChange={this.handleChange('riskLevel')}
                                                margin="normal"
                                            />
                                        </Grid> */}
                                        <Grid item xs={3}>
                                            <TextField
                                                id="likelihood"
                                                label="likelihood"
                                                multiline
                                                rowsMax="4"
                                                className={classes.textField}
                                                value={this.props.threatScenario.likelihood}
                                                onChange={this.handleChange('likelihood')}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid container spacing={24}>
                                        <Grid item xs={3}>
                                        </Grid>
                                        <Grid item xs={6}>
                                        </Grid>
                                        <Grid item xs={3} container justify="center">
                                            <Grid container spacing={24}>
                                                <Grid item xs={6} container justify="center">
                                                    <Button variant="contained" color="secondary" className={classes.button} component='a' href="/threatScenario">
                                                        Cancel
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={6} container justify="flex-start">
                                                    <Button variant="contained" color="primary" className={classes.button} onClick={(event) => this.handleClick(event)}>
                                                        Save
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </form>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

//export default Home;

AddThreatScenario.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


const connectedAddThreatScenarioPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(AddThreatScenario)));

export { connectedAddThreatScenarioPage as AddThreatScenario };