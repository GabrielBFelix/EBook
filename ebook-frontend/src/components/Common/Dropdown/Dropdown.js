import React, { Component } from 'react';

import { StyledLink, ShowDropdownSpan, DropdownContainer, DropdownList } from './DropdownStyles';

import { IoIosArrowDown } from 'react-icons/io';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            showDropdown: !prevState.showDropdown,
        }));
    };
    render() {
        const { items, name } = this.props;
        const { showDropdown } = this.state;
        return (
            <DropdownContainer>
                <ShowDropdownSpan onClick={this.handleClick}>
                    {name} <IoIosArrowDown></IoIosArrowDown>
                </ShowDropdownSpan>
                {showDropdown ? (
                    <DropdownList onClick={this.handleClick}>
                        {items.map((item) => {
                            return <StyledLink key={item.id} to={item.url}>{item.name}</StyledLink>;
                        })}
                    </DropdownList>
                ) : null}
            </DropdownContainer>
        );
    }
}

export default Dropdown;
