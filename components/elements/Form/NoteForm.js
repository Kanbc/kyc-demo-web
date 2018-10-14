import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Constant } from '../..';
import { deleteThisDayNote, editThisDayNote } from '../../../store';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.note.id,
            name: this.props.note.name,
            tel: this.props.note.tel,
            note: this.props.note.note,
            isEdit: false,
        };

        this.editNote = this.editNote.bind(this);
        this.cancelEditNote = this.cancelEditNote.bind(this);
    }

    editNote() {
        this.setState({ isEdit: true });
    }

    cancelEditNote() {
        this.setState({ isEdit: false });
    }

    render() {
        let button1 = null;
        let button2 = null;
        if (this.state.isEdit === true) {
            button1 = <Button width="80px" bstrap="btn-success" onClick={() => {
                // validation
                // edit note api
                this.props.dispatch(editThisDayNote({
                    id: this.state.id,
                    name: this.state.name,
                    tel: this.state.tel,
                    note: this.state.note
                }));

                this.cancelEditNote();
            }}>บันทึก</Button>;
            // button2 = <CancelModal width="80px" color={Constant.Red} onClick={() => this.cancelEditNote()}>ยกเลิก</CancelModal>;
            button2 = "";
        } else {
            button1 = <Button width="80px" color={Constant.Orange} onClick={this.editNote}>แก้ไข</Button>;
            button2 = <Button width="80px" bstrap="btn-danger" color={Constant.Red} onClick={() => {
                // pop-upbefore delete();
                // delete note api
                this.props.dispatch(deleteThisDayNote({
                    id: this.state.id,
                    name: this.state.name,
                    tel: this.state.tel,
                    note: this.state.note
                }));
            }}>ลบ</Button>;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2">
                        <p className="bold-text">ชื่อ</p>
                    </div>
                    <div className="col-sm-4">
                        <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.name}</p>
                        <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="name" defaultValue={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="col-sm-2">
                        <p className="bold-text">เบอร์โทร</p>
                    </div>
                    <div className="col-sm-4">
                        <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.tel}</p>
                        <input type="text" className={this.state.isEdit ? 'form-control' : 'form-control d-none'} id="tel" defaultValue={this.state.tel} onChange={e => this.setState({ tel: e.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <p className="bold-text">รายละเอียด</p>
                    </div>
                    <div className="col-sm-6">
                        <p className={this.state.isEdit ? 'd-none' : ''} >{this.state.note}</p>
                        <textarea className={this.state.isEdit ? 'form-control' : 'form-control d-none'} rows="2" id="note" defaultValue={this.state.note} onChange={e => this.setState({ note: e.target.value })} />
                    </div>
                    <div className="col-sm-2">
                        {button1}
                    </div>
                    <div className="col-sm-2">
                        {button2}
                    </div>
                </div>
                <style jsx>{`
                    .row{
                        margin-top:10px;
                        margin-bottom:40px;
                        p{
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            left: 0;
                            right: 0;
                            text-align: left;
                        }

                    }
                    .bold-text{
                        font-weight:bold;
                    }
                    @media (max-width: 576px) { 
                        .row{
                            margin-top:0px;
                            margin-bottom:0px;
                            p{
                                position: relative;
                                text-align: left;
                            }
                        }
                    }
                `}
                </style>
            </div>
        );
    }
}

export default connect()(NoteForm);
