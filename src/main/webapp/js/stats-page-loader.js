// Fetch stats and display them in the page.
  function fetchStats() {
    const url = '/stats';
    fetch(url).then((response) => response.json()).then((stats) => {
      const statsContainer = document.getElementById('stats-container');
      statsContainer.innerHTML = '';

      const messageCountElement = buildStatElement(`Message count: ${stats.messageCount}`);
      statsContainer.appendChild(messageCountElement);

      const maxMsgLengthElement = buildStatElement(`Maximum message length: ${stats.maxMsgLength}`);
      statsContainer.appendChild(maxMsgLengthElement);
    });
  }

  // Builds the stat element to be displayed
  function buildStatElement(statString) {
    const statElement = document.createElement('p');
    statElement.appendChild(document.createTextNode(statString));
    return statElement;
  }

  // Fetch data and populate the UI of the page.
  function buildUI() {
    fetchStats();
  }
