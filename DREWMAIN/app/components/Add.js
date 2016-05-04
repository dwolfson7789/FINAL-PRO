import React from 'react';

function Add(props){
  return (
    <div className=''>
      <p>Add a Tip</p>
        <form onSubmit={props.onSubmitRecipe}>
          <div className="">
          <input
            className=""
            placeholder="Enter Venue"
            onChange={props.onChangeName}
            type="text" />
          <input
            className=""
            placeholder="Enter Estimated Wait"
            onChange={props.onChangeIngredients}
            type="text" />
    </div>
    <div className="">
      <button
        className=""
        type="submit">
        Add Estimated Wait Time
      </button>
    </div>
  </form>
</div>
  );
}

export default Add;
