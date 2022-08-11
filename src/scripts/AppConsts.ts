/**
 * 程序常量
 */
class AppConsts {
    /**
     * token 键值
     */
    tokenKey: string = "Authorization_HZY_ADMIN_SPA"
    /**
    * 域名
    */
    domainName: string = process.env.NODE_ENV == "production" ? "" : "http://localhost:5600"
    /**
    * Guid Empty String
    */
    guidEmpty: string = '00000000-0000-0000-0000-000000000000'
    /**
     * app 前缀 用于浏览器本地缓存 key 的前缀
     */
    appPrefix: string = "HzyAdminElementPlus"
    /**
     * 用于请求头部授权码key名称
     */
    authorizationKeyName: string = "Authorization"

}

export default new AppConsts();