export default function CaseStudies() {
  return (
    <div id="case-studies" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-dark-red">Recent Case Studies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Legal Case File</h3>
            <p>Road Accident</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Corporate Settlements</h3>
            <p>Banking Fraud</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Property Disputes</h3>
            <p>Dispute Resolution</p>
          </div>
        </div>
      </div>
    </div>
  );
}
