export default function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onCheck,
}) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onCheck(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} {quantity}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
