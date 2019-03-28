import React, { Component } from 'react';

// We need to use interface to use the properties from the passed from parent Component
export interface IProps {
    allData: any
}

// IProps interface is passed to the Component, {} in the components indicates that we are not using passing any interface to use the states
export default class DisplayInfo extends Component<IProps, {}>{   
    render() {
        // console.log("DisplayInfo rendered.")
        // console.log(this.props.allData)
        return (
// we have used react fragment as we want to return more than one elements on rendering.
// another possible way for returing more than one elements we can use return [ ], but this sometimes gives us console errors when creating more complex nested structured application.
            <React.Fragment>
                <div>
                    <p>
                        The basic salary of {this.props.allData.name} is {this.props.allData.salary}.
                 </p>
                    <p>
                        {this.props.allData.name} is {this.props.allData.Mstatus}.
                 </p>
                    <p>                        
                        The gross Salary {this.props.allData.salary * 1 + this.props.allData.salary * 40 / 100 + 
                            this.props.allData.salary * 20 / 100}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}