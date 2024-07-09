import {Button} from "antd";

function FilterButton(props) {
    function handleClick() {
        props.setFilter(props.name)
    }

    return (
        <Button
            type="primary"
            className="filter-button"
            onClick={handleClick}>
            <span>{props.name}</span>
        </Button>
    );
}

export default FilterButton;
