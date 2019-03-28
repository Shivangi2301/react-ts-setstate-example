import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo';

export interface formInputState {
    name: any,
    basicSalary: number,
    maritialStatus: any,    
    isFormSubmitted: boolean,
    employee: any[]
}

export default class InputForm extends Component<{}, formInputState> {
    constructor(props: any, state: formInputState) {
        super(props);
        this.state = {
            name: "",
            basicSalary: 0,
            maritialStatus: "single",            
            isFormSubmitted: false,
            employee: [] as any[]
        }
    }

    onNameChnage = (e: any) => {
      // console.log("onNameChnage called");
        this.setState({
            isFormSubmitted: false
        })
        // we have taken the id of the target to identify the input type and accordingly set the state
        switch (e.target.id) {
            case 'name':
                this.setState({
                    name: e.target.value
                })
                break;
            case 'salary':
                this.setState({
                    basicSalary: e.target.value
                })
                break;
            case 'single':
                this.setState({
                    maritialStatus: e.target.value
                })
                break;
            case 'married':
                this.setState({
                    maritialStatus: e.target.value
                })            
        }
    }

    onFormSubmit = () => {
        var s: any[] = this.state.employee;
        s.push({ name: `${this.state.name}`, salary: `${this.state.basicSalary}`, Mstatus: `${this.state.maritialStatus}` });
        this.setState({
            isFormSubmitted: true,
            employee: s
        })
        // console.log("state: ", this.state.employee);
    }

    viewData() {
        console.log("view data called");
        return this.state.employee.map(function (object: any, i: any) {
            return <DisplayInfo allData={object} key={i} />
        })
    }

    render() {
        // console.log("state: ", this.state.employee)        
        return (
            <React.Fragment>
                <form >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>
                                        Name:
                                    </label>
                                </td>
                                <td>
                                    <input type="text" onChange={this.onNameChnage} id="name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Salary
                            </label>
                                </td>
                                <td>
                                    <input type="text" onChange={this.onNameChnage} id="salary" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>
                                        Maritial Status
                            </label>
                                </td>
                                <td>
                                    <input type="radio" name="MStatus" id="single" onChange={this.onNameChnage} value="single" />Single
                                    <input type="radio" name="MStatus" id="married" onChange={this.onNameChnage} value="married" />Married
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="button" value="Submit" onClick={this.onFormSubmit} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>            
                {this.viewData()}                
            </React.Fragment>
        )
    }
}