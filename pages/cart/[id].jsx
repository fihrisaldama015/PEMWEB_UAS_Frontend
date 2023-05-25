import React, { useEffect, useState } from "react";
import Sellersection from "../../components/organism/shoppage/sellersection";
import Link from "next/link";
import Image from "next/image";
import CartCard from "../../components/molecule/keranjang/card";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { transactionBuy, getTotalPrice } from "../../store/transaction/transaction.action";
import { useRouter } from "next/router";
import { fetchProductsAsync } from "../../store/products/produtcs.action";
import back from "../../assets/svg/back.svg";
import { deleteShopCart } from "../../store/cart/cart.action";
export default function CartDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const storeId = router.asPath.split("/")[2];
  const allCart = useSelector(selectCart);
  const allCartEmpty = allCart.length == 0;
  let selectedCart = allCart.filter((e) => e._id_toko == storeId)[0];
  let totalPrice;
  if (selectedCart) {
    totalPrice = selectedCart.length == 0 ? 0 : getTotalPrice(selectedCart);
  }
  const handleBuy = () => {
    dispatch(transactionBuy({ _id_toko: storeId, cart: selectedCart.cart }));
    dispatch(deleteShopCart(storeId, allCart));
    router.push("/shop");
  };
  //   let idStore, carts;
  //   //   if (allCartEmpty) {
  //   //     idStore = 0;
  //   //   } else {
  //   //     idStore = allCart[0]._id_toko;
  //   //   }
  //   const [selectedIdStore, setSelectedIdStore] = useState(idStore);
  //   if (allCartEmpty) {
  //     carts = [];
  //   } else {
  //     carts = allCart.filter((c) => c._id_toko == selectedIdStore)[0];
  //   }
  //   const [selectedCarts, setSelectedCarts] = useState(carts);

  //   const toko_id = selectedCarts._id_toko;
  //   const handleChangeStore = (idtoko) => {
  //     setSelectedIdStore(idtoko);
  //     setSelectedCarts(allCart.filter((c) => c._id_toko == idtoko)[0]);
  //   };
  //   useEffect(() => {
  //     dispatch(fetchProductsAsync());
  //   }, []);
  return (
    <div className="flex justify-center ">
      <div className="w-screen max-w-md bg-mygreen  relative border border-gray-200">
        <Link href="/shop">
          <div className="px-5 text-[#618D80] py-2 font-bold flex gap-2 items-center">
            <svg width="20" height="13" viewBox="0 0 20 13" fill="#618D80" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.0023e-09 6.50258C0.00167844 6.72498 0.0871314 6.93803 0.238333 7.09676L0.243333 7.10707L5.24333 12.259C5.4005 12.4154 5.611 12.5019 5.8295 12.5C6.048 12.498 6.25701 12.4077 6.41152 12.2485C6.56602 12.0893 6.65366 11.8739 6.65556 11.6488C6.65746 11.4237 6.57347 11.2068 6.42167 11.0448L2.845 7.35779H19.1667C19.3877 7.35779 19.5996 7.26733 19.7559 7.1063C19.9122 6.94527 20 6.72687 20 6.49914C20 6.27141 19.9122 6.05301 19.7559 5.89198C19.5996 5.73096 19.3877 5.64049 19.1667 5.64049H2.845L6.42167 1.95516C6.57347 1.79322 6.65746 1.57632 6.65556 1.35119C6.65366 1.12605 6.56602 0.910693 6.41152 0.751493C6.25701 0.592292 6.048 0.501989 5.8295 0.500032C5.611 0.498076 5.4005 0.584623 5.24333 0.741033L0.243333 5.89293L0.238333 5.90152C0.164147 5.97897 0.105278 6.07054 0.0650001 6.17114C0.0221002 6.27484 -9.40675e-06 6.38641 3.0023e-09 6.49914V6.50258Z"
                fill="#618D80"
              />
            </svg>
            <div>Kembali</div>
          </div>
        </Link>
        {/* notif dll */}
        <div className="px-5 py-4">
          <Sellersection />
        </div>
        {/* constent section */}

        <div className="mt-4">
          <div className=" w-full h-screen bg-white rounded-3xl">
            <div className="px-8 py-9">
              {/* title & seller*/}
              <div className="mb-10 flex gap-6 items-center">
                <Link href="/cart">
                  <Image src={back}></Image>
                </Link>
                {/* title */}
                <p className=" text-2xl font-medium ">Keranjang belanjaan anda</p>
                {/* seller */}
              </div>
              {/* list card */}
              {!allCartEmpty && (
                <div className="flex justify-center mb-10 flex-col gap-3">
                  {selectedCart?.cart.map((cart, i) => (
                    <CartCard key={i} data={cart} storeId={storeId} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* shop total */}
        {!allCartEmpty && (
          <div onClick={handleBuy} className=" fixed bottom-0 max-w-md" style={{ width: "inherit" }}>
            <button className=" text-2xl w-full bg-[#FB7777]  px-8 py-4 flex justify-between text-white font-bold">
              <div>Rp. {totalPrice ? totalPrice : 0}</div>
              <div>Beli</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
