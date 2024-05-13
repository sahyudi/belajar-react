export default function Footer({ items }) {
  const totalItems = items.length;

  if (totalItems === 0)
    return <footer className="stats">Daftar belanjaan masih kosong</footer>;

  const checkedItems = items.filter((items) => items.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);
  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
