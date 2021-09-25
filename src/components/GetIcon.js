import React from "react";
import {
  AiOutlineEdit,
  AiOutlineBell,
  AiFillDelete,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUser,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineDashboard,
  AiOutlineLineChart,
  AiOutlineCreditCard,
  AiOutlineUnorderedList,
  AiOutlineDollarCircle,
  AiOutlineGift,
  AiOutlinePlus,
  AiOutlineMinus,
  CgClose,
  BiCog,
  BiError,
  BiPackage,
  BiShoppingBag,
  BiLogOut,
  BiReceipt,
  FaStoreAlt,
  FaLuggageCart,
  FiHeart,
  FiUsers,
  GrDiamond,
  IoBagHandleSharp,
  IoWalletOutline,
} from "react-icons/all";

export const GetIcon = ({ icon, size, className }) => {
  switch (icon) {
    case "user":
      return <AiOutlineUser size={size} className={className} />;
    case "users":
      return <FiUsers size={size} className={className} />;
    case "add-user":
      return <AiOutlineUserAdd size={size} className={className} />;
    case "remove-user":
      return <AiOutlineUserDelete size={size} className={className} />;
    case "products":
      return <FaLuggageCart size={size} className={className} />;
    case "category":
    case "orders":
      return <AiOutlineUnorderedList size={size} className={className} />;
    case "chart":
      return <AiOutlineLineChart size={size} className={className} />;
    case "money":
      return <AiOutlineDollarCircle size={size} className={className} />;
    case "bell":
      return <AiOutlineBell size={size} className={className} />;
    case "bag":
      return <IoBagHandleSharp size={size} className={className} />;
    case "card":
      return <AiOutlineCreditCard size={size} className={className} />;
    case "diamond":
      return <GrDiamond size={size} className={className} />;
    case "heart":
      return <FiHeart size={size} className={className} />;
    case "edit":
      return <AiOutlineEdit size={size} className={className} />;
    case "delete":
      return <AiFillDelete size={size} className={className} />;
    case "cart":
      return <AiOutlineShoppingCart size={size} className={className} />;
    case "dashboard":
      return <AiOutlineDashboard size={size} className={className} />;
    case "error":
      return <BiError size={size} className={className} />;
    case "package":
      return <BiPackage size={size} className={className} />;
    case "cog":
      return <BiCog size={size} className={className} />;
    case "store-alt":
      return <FaStoreAlt size={size} className={className} />;
    case "gift":
      return <AiOutlineGift size={size} className={className} />;
    case "shopping":
      return <BiShoppingBag size={size} className={className} />;
    case "receipt":
      return <BiReceipt size={size} className={className} />;
    case "logout":
      return <BiLogOut size={size} className={className} />;
    case "wallet":
      return <IoWalletOutline size={size} className={className} />;
    case "close":
      return <CgClose size={size} className={className} />;
    case "plus":
      return <AiOutlinePlus size={size} className={className} />;
    case "minus":
      return <AiOutlineMinus size={size} className={className} />;

    default:
      return <AiOutlineStar size={size} className={className} />;
  }
};
