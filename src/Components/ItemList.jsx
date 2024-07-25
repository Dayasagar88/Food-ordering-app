import MenuItem from "./MenuItem";

const ItemList = ({ items }) => {
  // console.log(items)

 

  // const uniqueItems = cardItems.filter(
  //   (item, index, self) =>
  //     index === self.findIndex((i) => i.card.info.id === item.card.info.id)
  // );
  //   console.log(cardItems)

  return (
    <div  className="itemList">
      {items?.map((item , index) => <MenuItem key={index} item={item} />)}
    </div>
  );
};

export default ItemList;
4;
