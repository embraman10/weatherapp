import React from 'react';

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
        <h5 className="display-5 text-muted">New York, US</h5>
        <div className="row justify-content-center">

          {this.formatDayCards()}

        </div>
      </div>
    )
  }

export default DayCards;