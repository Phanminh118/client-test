import { Store } from "redux";
import { TypeApi } from "../api/apartment/type";
import { CommonAction } from "../service/store/common/action";

export const apartmentLoader = (store: Store) => {
  TypeApi.getAllApartmentType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateApartmentType(res.data.result));
    }
  });
  TypeApi.getAllKitchenType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateKitchenType(res.data.result));
    }
  });
  TypeApi.getAllToiletType().then((res) => {
    if (res.data.status === 200) {
      store.dispatch(CommonAction.updateToiletType(res.data.result));
    }
  });
};
