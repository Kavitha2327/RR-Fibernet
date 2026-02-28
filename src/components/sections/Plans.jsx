const Plans = () => {
  return (
    <section className="plans">
      <div className="container">
        <h2>Popular Plans</h2>
        <div className="plan-grid">
          <div className="plan-card">
            <h3>Basic</h3>
            <p>50 Mbps</p>
            <p>₹499/month</p>
          </div>
          <div className="plan-card featured">
            <h3>Standard</h3>
            <p>100 Mbps</p>
            <p>₹799/month</p>
          </div>
          <div className="plan-card">
            <h3>Premium</h3>
            <p>200 Mbps</p>
            <p>₹1199/month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;