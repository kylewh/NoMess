import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class AddTodoPanel extends Component {
  constructor (props) {
    super(props)
    this.handleKeyPressSubmit = this.handleKeyPressSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.datePicker.value = this.injectDate()
  }

  handleSubmit () {
    const due = this.datePicker.value
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

  render () {
    return (
      <form
        className={'addTodo-panel'}
      >
        <textarea
          type={'submit'}
          placeholder={'又有事情忙啦?'}
          ref={node => { this.textarea = node }}
          onKeyDown={this.handleKeyPressSubmit}
         />
        <div className='schedulepicker'>
          <div>
            <select
              className='bw-daypicker'
              defaultValue={8}
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
            <input
              ref={node => this.datePicker = node}
              className='datepicker'
              type='date'
              />
          </div>

          <div>
            <input
              className='submit-btn'
              type='button'
              value='添加'
              onClick={this.handleSubmit}
            />
          </div>

        </div>

      </form>
    )
  }
}

export default AddTodoPanel
