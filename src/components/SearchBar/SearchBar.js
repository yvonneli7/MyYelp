import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match' : 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);


    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }

    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });

    }

    handleTermChange(e){
        let term = e.target.value;
        this.setState = {
            term: term
        };
        


    }

    handleLocationChange(e){
        let location = e.target.value;
        this.setState = {
            location: location
        };

    }


    renderSortByOptions(){
         return Object.keys(this.sortByOptions).map(key => {
            let sortByOptionValue = this.sortByOptions[key];
            let attribute = this.getSortByClass(sortByOptionValue);
            return <li className = {attribute} key={sortByOptionValue} onClick = {this.handleSortByChange.bind(this,sortByOptionValue)}>{key}</li>;
        });

    }

    handleSearch(e){
        //let searchParams = e.target.value;
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();

    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange = {this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange = {this.handleLocationChange} placeholder="Where?" />
                </div>
                <div onClick = {this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )

    };

}

export default SearchBar;