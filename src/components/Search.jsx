var Search = ({getVids}) => {
  return (
    <div className="search-bar form-inline">
      <input onChange={(event) => getVids(event.target.value)} id="searchbar" className="form-control" type="text" placeholder="Cats in fancy pants" />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
