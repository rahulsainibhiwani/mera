import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-Type": "application/json",
    secret_key: "sk_wybMl6PTmF/OEmEqSdR4yxZhsB5x3p8aIeFWMzo1gnPb==",
    publish_key: "pk_oC0NTHROnxdmL3Jc+Pci4DiQ6bcljKnQHLVuhxBv=",
  },
});
