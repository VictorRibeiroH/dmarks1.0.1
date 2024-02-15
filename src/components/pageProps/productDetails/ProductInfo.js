import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.productName}</h2>
      <p className="text-xl font-semibold">{productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Seja um dos primeiro a avaliar.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Cores:</span> {productInfo.color}
      </p>
      <button
        // onClick={() =>
        //   dispatch(
        //     addToCart({
        //       _id: productInfo.id,
        //       name: productInfo.productName,
        //       quantity: 1,
        //       image: productInfo.img,
        //       badge: productInfo.badge,
        //       price: productInfo.price,
        //       colors: productInfo.color,
        //     })
        //   )
        // }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        <a href="https://wa.me/5541991625742?text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+cota%C3%A7%C3%A3o+dos+produtos%3A+" target="_blank">Solicite seu orçamento</a>
      </button>
      <p className="font-normal text-sm">
        {/* <span className="text-base font-medium"> Categorias:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A */}
      </p>
    </div>
  );
};

export default ProductInfo;
