import React from 'react';

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  render() {
    return (
      <div>
        {this.formatDayCards()}
      </div>
    )
  }

export default DayCards;