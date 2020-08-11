import React from "react";
import { connect } from "react-redux";
import { add, remove, complete,edit,editname } from "./redux/action";

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      normal: true,
      edit:false,
      check: false,
      toggle: false,
      totalDisplay: false,
      name:""
    };
  }
  handleToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
      
    });
  };

  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
      
    });
  };

  handleChange = (e)=>{
      this.setState({
          name:e.target.value
      },
      (e)=>this.props.edit(e.target.id))
      
  }

  handleChange1 = (e)=>{
    this.setState({
        edit:!this.state.edit
    },edit(e.target.id))
}

//   handleTotal = () => {
//     this.setState({
//       toggle: false,
//       totalDisplay: !this.state.totalDisplay,
//       normal: !this.state.normal
//     });
//   };
  render() {
    const { check, toggle, totalDisplay, normal } = this.state;
    const { todo, add, remove, complete,edit,editname } = this.props;
    console.log(this.state)
    return (
      <>
        <input
          value={this.state.value}
          onChange={e =>
            this.setState({
              value: e.target.value
            })
          }
        />
        <button
          onClick={() => {
            add(this.state.value);
            this.setState({
              value: "",
              normal: true,
              toggle: false,
              totalDisplay: false
            });
          }}
        >
          ADD
        </button>
        <h1>TODO</h1>
        <div style={{ border: "2px solid black",width:"600px",margin:"auto" }}>
          {todo &&
            todo
              .filter(item => {
                return item.status === true;
              })
              .map((item, index) => (
                <div key={index}>
                  <div> {item.name} </div>
                  <input
                    name="checkbox"
                    type="checkbox"
                    id={item.id}
                    checked={check}
                    onChange={e => complete(e.target.id)}
                  />
                  <button
                    style={{ backgroundColor: "red",margin:"auto", color: "white" }}
                    onClick={e => remove(e.target.id)}
                    id={item.id}
                  >
                    Remove
                  </button>
                  {!this.state.edit?
                  <button onClick={this.handleEdit} id={item.id}>
                    Edit
                  </button>:
                       <div><input type ="text" name ="name" onChange={(e) => editname(e.target.value)}/>
                       <button onClick={(e)=>edit(e.target.id)} id={item.id}>
                       Edit
                     </button>
                     </div>
                  }
                 
                </div>
              ))}
        </div>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={() => this.handleToggle()}
        >
          COMPLETED TODO
        </button>
        <div style={{ border: "2px solid black",width:"600px",margin:"auto"}}>
          {toggle &&
            todo
              .filter(item => {
                return item.status === false;
              })
              .map((item, index) => (
                <div key={index}>
                  <div style={{ textDecoration: "lineThrough" }}>
                    {" "}
                    {item.name}{" "}
                  </div>
                  <input
                    name="checkbox"
                    type="checkbox"
                    id={item.id}
                    checked="on"
                    onChange={e => complete(e.target.id)}
                  />
                  <button onClick={e => remove(e.target.id)} id={item.id}>
                    Remove
                  </button>
                  {!this.state.edit?
                  <button onClick={this.handleEdit} id={item.id}>
                    Edit
                  </button>:
                       <div><input type ="text" value ={this.state.name} onChange={this.handleChange }/>
                       <button onClick={(e)=>edit(e.target.id),this.setState({edit:false})} id={item.id}>
                       Edit
                     </button>
                     </div>
                  }
                </div>
              ))}
        </div>
               
      </>
    );
  }
}
const mapStateToProps = state => ({
  todo: state.todo
});
const mapDispatchToProps = dispatch => ({
  add: item => dispatch(add(item)),
  remove: item => dispatch(remove(item)),
  complete: item => dispatch(complete(item)),
  edit: (n) => dispatch(edit(n)),
  editname: (n) => dispatch(editname(n))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todolist);