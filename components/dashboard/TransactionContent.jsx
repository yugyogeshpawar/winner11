const TransactionContent = () => {
  return (
    <div className="dashboard__body__wrap">
      <h3 className="account__head mb__30">Transaction History</h3>
      <div className="cainoform__wrap">
        <div className="row g-4">
          <div className="col-xl-6">
            <div className="casino__date">
              <h4 className="f__title">From</h4>
              <div className="calender-bar">
                <input
                  type="text"
                  className="datepicker"
                  placeholder="2023-2-2"
                />
                <i className="icon-calender"></i>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="casino__date">
              <h4 className="f__title">Until</h4>
              <div className="calender-bar">
                <input
                  type="text"
                  className="datepicker"
                  placeholder="2023-2-2"
                />
                <i className="icon-calender"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="casinoform__tabe">
        <table>
          <thead>
            <tr>
              <th>Game</th>
              <th>Payment Methods</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Ratio</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2PQ8B4KYMJ</td>
              <td>Bank / CC</td>
              <td>5,591 USD</td>
              <td className="cancel">Cancel</td>
              <td>8.55</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>4TQRW5WXF4</td>
              <td>Credit Card</td>
              <td>5,591 USD</td>
              <td className="pending">Prnding</td>
              <td>2.70</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>XR97K86R7Y</td>
              <td>Bank / CC</td>
              <td>5,591 USD</td>
              <td className="cancel">Cancel</td>
              <td>8.50</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>VEJP8A5J87</td>
              <td>Bank</td>
              <td>5,591 USD</td>
              <td className="complate">Complete</td>
              <td>7.05</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>JKNFWEJ123</td>
              <td>Credit Card</td>
              <td>5,591 USD</td>
              <td className="cancel">Cancel</td>
              <td>3.05</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>NC8S4QJ4K2</td>
              <td>Bank</td>
              <td>5,591 USD</td>
              <td className="pending">Prnding</td>
              <td>3.20</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>DGPSN7SRM4</td>
              <td>Bank / CC</td>
              <td>5,591 USD</td>
              <td className="complate">Complete</td>
              <td>2.40</td>
              <td className="bold">...</td>
            </tr>
            <tr>
              <td>ZT3FA5D8N7</td>
              <td>Bank</td>
              <td>5,591 USD</td>
              <td className="complate">Complete</td>
              <td>1.95</td>
              <td className="bold">...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionContent;
