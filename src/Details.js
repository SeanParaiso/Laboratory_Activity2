export function DetailList({ details }) {
  return (
    <div className="detail-list">
      {details.map((info, index) => (
        <div key={index} className="infos">
          <h2>{info.name}</h2>
          {info.sub && <h4>{info.sub}</h4>}
          <p>{info.about}</p>
        </div>
      ))}
    </div>
  );
}
