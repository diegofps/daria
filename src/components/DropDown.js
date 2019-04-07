import * as React from 'react'

export default class DropDown extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            data: props.data,
            updateSelection: props.updateSelection,
        }
    }

    updateSelection = (evt) =>
    {
        const key = evt.target.value
        const item = this.state.data[key]
        this.state.updateSelection(key, item)
    }

    render()
    {
        return (
            <select onChange={this.updateSelection}>
                <option> - pick up model - </option>
                {Object.keys(this.state.data).map(key => 
                    <option key={key} value={key}> {key} ({this.state.data[key].year}) </option>
                )}
            </select>
        )
    }
}
