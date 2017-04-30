import React, { Component } from 'react'
import Panel from '../styled/Panel'
import Textarea from '../styled/Textarea'
import Schedule from '../styled/Schedule'
import DatePicker from '../styled/DatePicker'
import SubmitBtn from '../styled/SubmitBtn'

class AddTodoPanel extends Component {
  constructor (props) {
    super(props)
    this.handleKeyPressSubmit = this.handleKeyPressSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.quickPick = this.quickPick.bind(this)
  }

  componentDidMount () {
    this.datePicker.value = this.injectDate()
  }

  handleSubmit () {
    const due = new Date(this.datePicker.value)
    this.props.addTodo(this.textarea.value.trim(), due)
  }

  handleKeyPressSubmit ({keyCode}) {
    const due = new Date(this.datePicker.value)
    if (keyCode === 13 && this.textarea.value.trim()) {
      this.props.addTodo(this.textarea.value.trim(), due)
    }
  }

  injectDate () {
    return new Date().toJSON().slice(0, 10)
  }

  quickPick () {
    let msec = +new Date(this.datePicker.value) - 0
    const diff = this.select.value * 24 * 3600 * 1000
    msec += diff
    this.datePicker.value = new Date(msec).toJSON().slice(0, 10)
  }

  render () {
    return (
      <Panel className='addTodo-panel'>
        <Textarea
          type={'submit'}
          placeholder={'又有事情忙啦?'}
          innerRef={node => { this.textarea = node }}
          onKeyDown={this.handleKeyPressSubmit}
         />
        <Schedule>
          <div>
            <select
              defaultValue={8}
              ref={node => this.select = node}
              onChange={this.quickPick}
            >
              <option value='0'>&nbsp;今天 星期二 </option>
              <option value='1'>&nbsp;明天 星期三</option>
              <option value='2'>&nbsp;后天 星期四</option>
              <option value='3'>大后天 星期五</option>
              <option value='4'>第五天 星期六</option>
              <option value='5'>第六天 星期日</option>
              <option value='6'>第七天 星期一</option>
              <option value='7'>下周今天 星期二</option>
              <option value='8' >快速选择</option>
            </select>
          </div>

          <div>
            <DatePicker
              innerRef={node => this.datePicker = node}
              type='date'
            />
          </div>

          <div>
            <SubmitBtn
              type='button'
              value='添加'
              onClick={this.handleSubmit}
            />
          </div>

        </Schedule>

      </Panel>
    )
  }
}

export default AddTodoPanel
