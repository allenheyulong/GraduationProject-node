export enum CouponStatus {
  AVAILABLE = 1,
  USED = 2,
  EXPIRED = 3,
}
export const getCouponStatusType = (value: string) => {
  switch (value) {
    case '1':
      return CouponStatus.AVAILABLE;
    case '2':
      return CouponStatus.USED;
    case '3':
      return CouponStatus.EXPIRED;
  }
};
