import ajax from "@/api/ajax";

export const login  = ({phone,password}) => ajax({url: 'user/login', method: 'POST',data:{phone,password}})