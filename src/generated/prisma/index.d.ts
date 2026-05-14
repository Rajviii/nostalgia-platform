
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model comments
 * 
 */
export type comments = $Result.DefaultSelection<Prisma.$commentsPayload>
/**
 * Model follows
 * 
 */
export type follows = $Result.DefaultSelection<Prisma.$followsPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model post_categories
 * 
 */
export type post_categories = $Result.DefaultSelection<Prisma.$post_categoriesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model notifications
 * 
 */
export type notifications = $Result.DefaultSelection<Prisma.$notificationsPayload>
/**
 * Model time_capsules
 * 
 */
export type time_capsules = $Result.DefaultSelection<Prisma.$time_capsulesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const notification_type: {
  like: 'like',
  comment: 'comment',
  follow: 'follow',
  system: 'system'
};

export type notification_type = (typeof notification_type)[keyof typeof notification_type]

}

export type notification_type = $Enums.notification_type

export const notification_type: typeof $Enums.notification_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Comments
 * const comments = await prisma.comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Comments
   * const comments = await prisma.comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follows`: Exposes CRUD operations for the **follows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follows.findMany()
    * ```
    */
  get follows(): Prisma.followsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post_categories`: Exposes CRUD operations for the **post_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_categories
    * const post_categories = await prisma.post_categories.findMany()
    * ```
    */
  get post_categories(): Prisma.post_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.notificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.time_capsules`: Exposes CRUD operations for the **time_capsules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Time_capsules
    * const time_capsules = await prisma.time_capsules.findMany()
    * ```
    */
  get time_capsules(): Prisma.time_capsulesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    comments: 'comments',
    follows: 'follows',
    likes: 'likes',
    posts: 'posts',
    categories: 'categories',
    post_categories: 'post_categories',
    users: 'users',
    notifications: 'notifications',
    time_capsules: 'time_capsules'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "comments" | "follows" | "likes" | "posts" | "categories" | "post_categories" | "users" | "notifications" | "time_capsules"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      comments: {
        payload: Prisma.$commentsPayload<ExtArgs>
        fields: Prisma.commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findFirst: {
            args: Prisma.commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          findMany: {
            args: Prisma.commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          create: {
            args: Prisma.commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          createMany: {
            args: Prisma.commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          delete: {
            args: Prisma.commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          update: {
            args: Prisma.commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          deleteMany: {
            args: Prisma.commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>[]
          }
          upsert: {
            args: Prisma.commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      follows: {
        payload: Prisma.$followsPayload<ExtArgs>
        fields: Prisma.followsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.followsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.followsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          findFirst: {
            args: Prisma.followsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.followsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          findMany: {
            args: Prisma.followsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>[]
          }
          create: {
            args: Prisma.followsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          createMany: {
            args: Prisma.followsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.followsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>[]
          }
          delete: {
            args: Prisma.followsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          update: {
            args: Prisma.followsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          deleteMany: {
            args: Prisma.followsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.followsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.followsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>[]
          }
          upsert: {
            args: Prisma.followsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$followsPayload>
          }
          aggregate: {
            args: Prisma.FollowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollows>
          }
          groupBy: {
            args: Prisma.followsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.followsCountArgs<ExtArgs>
            result: $Utils.Optional<FollowsCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      post_categories: {
        payload: Prisma.$post_categoriesPayload<ExtArgs>
        fields: Prisma.post_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          findFirst: {
            args: Prisma.post_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          findMany: {
            args: Prisma.post_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          create: {
            args: Prisma.post_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          createMany: {
            args: Prisma.post_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          delete: {
            args: Prisma.post_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          update: {
            args: Prisma.post_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.post_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.post_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Post_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_categories>
          }
          groupBy: {
            args: Prisma.post_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Post_categoriesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      notifications: {
        payload: Prisma.$notificationsPayload<ExtArgs>
        fields: Prisma.notificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findFirst: {
            args: Prisma.notificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          findMany: {
            args: Prisma.notificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          create: {
            args: Prisma.notificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          createMany: {
            args: Prisma.notificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          delete: {
            args: Prisma.notificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          update: {
            args: Prisma.notificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          deleteMany: {
            args: Prisma.notificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>[]
          }
          upsert: {
            args: Prisma.notificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.notificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      time_capsules: {
        payload: Prisma.$time_capsulesPayload<ExtArgs>
        fields: Prisma.time_capsulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.time_capsulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.time_capsulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          findFirst: {
            args: Prisma.time_capsulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.time_capsulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          findMany: {
            args: Prisma.time_capsulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>[]
          }
          create: {
            args: Prisma.time_capsulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          createMany: {
            args: Prisma.time_capsulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.time_capsulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>[]
          }
          delete: {
            args: Prisma.time_capsulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          update: {
            args: Prisma.time_capsulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          deleteMany: {
            args: Prisma.time_capsulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.time_capsulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.time_capsulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>[]
          }
          upsert: {
            args: Prisma.time_capsulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$time_capsulesPayload>
          }
          aggregate: {
            args: Prisma.Time_capsulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTime_capsules>
          }
          groupBy: {
            args: Prisma.time_capsulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Time_capsulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.time_capsulesCountArgs<ExtArgs>
            result: $Utils.Optional<Time_capsulesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    comments?: commentsOmit
    follows?: followsOmit
    likes?: likesOmit
    posts?: postsOmit
    categories?: categoriesOmit
    post_categories?: post_categoriesOmit
    users?: usersOmit
    notifications?: notificationsOmit
    time_capsules?: time_capsulesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    comments: number
    likes: number
    post_categories: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostsCountOutputTypeCountCommentsArgs
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    post_categories?: boolean | PostsCountOutputTypeCountPost_categoriesArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPost_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    post_categories: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_categories?: boolean | CategoriesCountOutputTypeCountPost_categoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountPost_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    comments: number
    follows_follows_follower_idTousers: number
    follows_follows_following_idTousers: number
    likes: number
    notifications_notifications_actor_idTousers: number
    notifications_notifications_user_idTousers: number
    posts: number
    time_capsules: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    follows_follows_follower_idTousers?: boolean | UsersCountOutputTypeCountFollows_follows_follower_idTousersArgs
    follows_follows_following_idTousers?: boolean | UsersCountOutputTypeCountFollows_follows_following_idTousersArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    notifications_notifications_actor_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_actor_idTousersArgs
    notifications_notifications_user_idTousers?: boolean | UsersCountOutputTypeCountNotifications_notifications_user_idTousersArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    time_capsules?: boolean | UsersCountOutputTypeCountTime_capsulesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollows_follows_follower_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollows_follows_following_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_actor_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotifications_notifications_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTime_capsulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: time_capsulesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    content: string | null
    create_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    post_id: number | null
    user_id: number | null
    content: string | null
    create_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    post_id: number
    user_id: number
    content: number
    create_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    create_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    create_at?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    post_id?: true
    user_id?: true
    content?: true
    create_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithAggregationInput | commentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    post_id: number | null
    user_id: number | null
    content: string
    create_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    create_at?: boolean
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    create_at?: boolean
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    create_at?: boolean
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type commentsSelectScalar = {
    id?: boolean
    post_id?: boolean
    user_id?: boolean
    content?: boolean
    create_at?: boolean
  }

  export type commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "post_id" | "user_id" | "content" | "create_at", ExtArgs["result"]["comments"]>
  export type commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }
  export type commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | comments$postsArgs<ExtArgs>
    users?: boolean | comments$usersArgs<ExtArgs>
  }

  export type $commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comments"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      post_id: number | null
      user_id: number | null
      content: string
      create_at: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type commentsGetPayload<S extends boolean | null | undefined | commentsDefaultArgs> = $Result.GetResult<Prisma.$commentsPayload, S>

  type commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comments'], meta: { name: 'comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commentsFindUniqueArgs>(args: SelectSubset<T, commentsFindUniqueArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commentsFindFirstArgs>(args?: SelectSubset<T, commentsFindFirstArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commentsFindManyArgs>(args?: SelectSubset<T, commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends commentsCreateArgs>(args: SelectSubset<T, commentsCreateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commentsCreateManyArgs>(args?: SelectSubset<T, commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {commentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends commentsDeleteArgs>(args: SelectSubset<T, commentsDeleteArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commentsUpdateArgs>(args: SelectSubset<T, commentsUpdateArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commentsDeleteManyArgs>(args?: SelectSubset<T, commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commentsUpdateManyArgs>(args: SelectSubset<T, commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {commentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends commentsUpsertArgs>(args: SelectSubset<T, commentsUpsertArgs<ExtArgs>>): Prisma__commentsClient<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commentsGroupByArgs['orderBy'] }
        : { orderBy?: commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comments model
   */
  readonly fields: commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends comments$postsArgs<ExtArgs> = {}>(args?: Subset<T, comments$postsArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends comments$usersArgs<ExtArgs> = {}>(args?: Subset<T, comments$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the comments model
   */
  interface commentsFieldRefs {
    readonly id: FieldRef<"comments", 'Int'>
    readonly post_id: FieldRef<"comments", 'Int'>
    readonly user_id: FieldRef<"comments", 'Int'>
    readonly content: FieldRef<"comments", 'String'>
    readonly create_at: FieldRef<"comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comments findUnique
   */
  export type commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findFirst
   */
  export type commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments findMany
   */
  export type commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * comments create
   */
  export type commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }

  /**
   * comments createMany
   */
  export type commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comments createManyAndReturn
   */
  export type commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to create many comments.
     */
    data: commentsCreateManyInput | commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments update
   */
  export type commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
  }

  /**
   * comments updateManyAndReturn
   */
  export type commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comments upsert
   */
  export type commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }

  /**
   * comments delete
   */
  export type commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
    /**
     * Limit how many comments to delete.
     */
    limit?: number
  }

  /**
   * comments.posts
   */
  export type comments$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * comments.users
   */
  export type comments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * comments without action
   */
  export type commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
  }


  /**
   * Model follows
   */

  export type AggregateFollows = {
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  export type FollowsAvgAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
  }

  export type FollowsSumAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
  }

  export type FollowsMinAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
    create_at: Date | null
  }

  export type FollowsMaxAggregateOutputType = {
    id: number | null
    follower_id: number | null
    following_id: number | null
    create_at: Date | null
  }

  export type FollowsCountAggregateOutputType = {
    id: number
    follower_id: number
    following_id: number
    create_at: number
    _all: number
  }


  export type FollowsAvgAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
  }

  export type FollowsSumAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
  }

  export type FollowsMinAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    create_at?: true
  }

  export type FollowsMaxAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    create_at?: true
  }

  export type FollowsCountAggregateInputType = {
    id?: true
    follower_id?: true
    following_id?: true
    create_at?: true
    _all?: true
  }

  export type FollowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to aggregate.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned follows
    **/
    _count?: true | FollowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowsMaxAggregateInputType
  }

  export type GetFollowsAggregateType<T extends FollowsAggregateArgs> = {
        [P in keyof T & keyof AggregateFollows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollows[P]>
      : GetScalarType<T[P], AggregateFollows[P]>
  }




  export type followsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: followsWhereInput
    orderBy?: followsOrderByWithAggregationInput | followsOrderByWithAggregationInput[]
    by: FollowsScalarFieldEnum[] | FollowsScalarFieldEnum
    having?: followsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowsCountAggregateInputType | true
    _avg?: FollowsAvgAggregateInputType
    _sum?: FollowsSumAggregateInputType
    _min?: FollowsMinAggregateInputType
    _max?: FollowsMaxAggregateInputType
  }

  export type FollowsGroupByOutputType = {
    id: number
    follower_id: number | null
    following_id: number | null
    create_at: Date | null
    _count: FollowsCountAggregateOutputType | null
    _avg: FollowsAvgAggregateOutputType | null
    _sum: FollowsSumAggregateOutputType | null
    _min: FollowsMinAggregateOutputType | null
    _max: FollowsMaxAggregateOutputType | null
  }

  type GetFollowsGroupByPayload<T extends followsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowsGroupByOutputType[P]>
            : GetScalarType<T[P], FollowsGroupByOutputType[P]>
        }
      >
    >


  export type followsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    create_at?: boolean
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type followsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    create_at?: boolean
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type followsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    create_at?: boolean
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["follows"]>

  export type followsSelectScalar = {
    id?: boolean
    follower_id?: boolean
    following_id?: boolean
    create_at?: boolean
  }

  export type followsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "follower_id" | "following_id" | "create_at", ExtArgs["result"]["follows"]>
  export type followsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }
  export type followsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }
  export type followsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_follows_follower_idTousers?: boolean | follows$users_follows_follower_idTousersArgs<ExtArgs>
    users_follows_following_idTousers?: boolean | follows$users_follows_following_idTousersArgs<ExtArgs>
  }

  export type $followsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "follows"
    objects: {
      users_follows_follower_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_follows_following_idTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      follower_id: number | null
      following_id: number | null
      create_at: Date | null
    }, ExtArgs["result"]["follows"]>
    composites: {}
  }

  type followsGetPayload<S extends boolean | null | undefined | followsDefaultArgs> = $Result.GetResult<Prisma.$followsPayload, S>

  type followsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<followsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowsCountAggregateInputType | true
    }

  export interface followsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['follows'], meta: { name: 'follows' } }
    /**
     * Find zero or one Follows that matches the filter.
     * @param {followsFindUniqueArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends followsFindUniqueArgs>(args: SelectSubset<T, followsFindUniqueArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Follows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {followsFindUniqueOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends followsFindUniqueOrThrowArgs>(args: SelectSubset<T, followsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindFirstArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends followsFindFirstArgs>(args?: SelectSubset<T, followsFindFirstArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Follows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindFirstOrThrowArgs} args - Arguments to find a Follows
     * @example
     * // Get one Follows
     * const follows = await prisma.follows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends followsFindFirstOrThrowArgs>(args?: SelectSubset<T, followsFindFirstOrThrowArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follows.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followsWithIdOnly = await prisma.follows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends followsFindManyArgs>(args?: SelectSubset<T, followsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Follows.
     * @param {followsCreateArgs} args - Arguments to create a Follows.
     * @example
     * // Create one Follows
     * const Follows = await prisma.follows.create({
     *   data: {
     *     // ... data to create a Follows
     *   }
     * })
     * 
     */
    create<T extends followsCreateArgs>(args: SelectSubset<T, followsCreateArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Follows.
     * @param {followsCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends followsCreateManyArgs>(args?: SelectSubset<T, followsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {followsCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follows = await prisma.follows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Follows and only return the `id`
     * const followsWithIdOnly = await prisma.follows.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends followsCreateManyAndReturnArgs>(args?: SelectSubset<T, followsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Follows.
     * @param {followsDeleteArgs} args - Arguments to delete one Follows.
     * @example
     * // Delete one Follows
     * const Follows = await prisma.follows.delete({
     *   where: {
     *     // ... filter to delete one Follows
     *   }
     * })
     * 
     */
    delete<T extends followsDeleteArgs>(args: SelectSubset<T, followsDeleteArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Follows.
     * @param {followsUpdateArgs} args - Arguments to update one Follows.
     * @example
     * // Update one Follows
     * const follows = await prisma.follows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends followsUpdateArgs>(args: SelectSubset<T, followsUpdateArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Follows.
     * @param {followsDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends followsDeleteManyArgs>(args?: SelectSubset<T, followsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends followsUpdateManyArgs>(args: SelectSubset<T, followsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {followsUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follows = await prisma.follows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Follows and only return the `id`
     * const followsWithIdOnly = await prisma.follows.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends followsUpdateManyAndReturnArgs>(args: SelectSubset<T, followsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Follows.
     * @param {followsUpsertArgs} args - Arguments to update or create a Follows.
     * @example
     * // Update or create a Follows
     * const follows = await prisma.follows.upsert({
     *   create: {
     *     // ... data to create a Follows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follows we want to update
     *   }
     * })
     */
    upsert<T extends followsUpsertArgs>(args: SelectSubset<T, followsUpsertArgs<ExtArgs>>): Prisma__followsClient<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follows.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends followsCountArgs>(
      args?: Subset<T, followsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowsAggregateArgs>(args: Subset<T, FollowsAggregateArgs>): Prisma.PrismaPromise<GetFollowsAggregateType<T>>

    /**
     * Group by Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {followsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends followsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: followsGroupByArgs['orderBy'] }
        : { orderBy?: followsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, followsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the follows model
   */
  readonly fields: followsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for follows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__followsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_follows_follower_idTousers<T extends follows$users_follows_follower_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, follows$users_follows_follower_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_follows_following_idTousers<T extends follows$users_follows_following_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, follows$users_follows_following_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the follows model
   */
  interface followsFieldRefs {
    readonly id: FieldRef<"follows", 'Int'>
    readonly follower_id: FieldRef<"follows", 'Int'>
    readonly following_id: FieldRef<"follows", 'Int'>
    readonly create_at: FieldRef<"follows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * follows findUnique
   */
  export type followsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where: followsWhereUniqueInput
  }

  /**
   * follows findUniqueOrThrow
   */
  export type followsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where: followsWhereUniqueInput
  }

  /**
   * follows findFirst
   */
  export type followsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * follows findFirstOrThrow
   */
  export type followsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * follows findMany
   */
  export type followsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter, which follows to fetch.
     */
    where?: followsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of follows to fetch.
     */
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing follows.
     */
    cursor?: followsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of follows.
     */
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * follows create
   */
  export type followsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The data needed to create a follows.
     */
    data?: XOR<followsCreateInput, followsUncheckedCreateInput>
  }

  /**
   * follows createMany
   */
  export type followsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many follows.
     */
    data: followsCreateManyInput | followsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * follows createManyAndReturn
   */
  export type followsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * The data used to create many follows.
     */
    data: followsCreateManyInput | followsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * follows update
   */
  export type followsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The data needed to update a follows.
     */
    data: XOR<followsUpdateInput, followsUncheckedUpdateInput>
    /**
     * Choose, which follows to update.
     */
    where: followsWhereUniqueInput
  }

  /**
   * follows updateMany
   */
  export type followsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update follows.
     */
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followsWhereInput
    /**
     * Limit how many follows to update.
     */
    limit?: number
  }

  /**
   * follows updateManyAndReturn
   */
  export type followsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * The data used to update follows.
     */
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyInput>
    /**
     * Filter which follows to update
     */
    where?: followsWhereInput
    /**
     * Limit how many follows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * follows upsert
   */
  export type followsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * The filter to search for the follows to update in case it exists.
     */
    where: followsWhereUniqueInput
    /**
     * In case the follows found by the `where` argument doesn't exist, create a new follows with this data.
     */
    create: XOR<followsCreateInput, followsUncheckedCreateInput>
    /**
     * In case the follows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<followsUpdateInput, followsUncheckedUpdateInput>
  }

  /**
   * follows delete
   */
  export type followsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    /**
     * Filter which follows to delete.
     */
    where: followsWhereUniqueInput
  }

  /**
   * follows deleteMany
   */
  export type followsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which follows to delete
     */
    where?: followsWhereInput
    /**
     * Limit how many follows to delete.
     */
    limit?: number
  }

  /**
   * follows.users_follows_follower_idTousers
   */
  export type follows$users_follows_follower_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * follows.users_follows_following_idTousers
   */
  export type follows$users_follows_following_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * follows without action
   */
  export type followsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
  }


  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    post_id: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    post_id: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    post_id: number | null
    create_at: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    post_id: number | null
    create_at: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    create_at: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    create_at?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    create_at?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    create_at?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    user_id: number | null
    post_id: number | null
    create_at: Date | null
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    create_at?: boolean
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    create_at?: boolean
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    create_at?: boolean
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    create_at?: boolean
  }

  export type likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id" | "create_at", ExtArgs["result"]["likes"]>
  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }
  export type likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }
  export type likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | likes$postsArgs<ExtArgs>
    users?: boolean | likes$usersArgs<ExtArgs>
  }

  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      post_id: number | null
      create_at: Date | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likesFindUniqueArgs>(args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs>(args: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likesFindFirstArgs>(args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs>(args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likesFindManyArgs>(args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends likesCreateArgs>(args: SelectSubset<T, likesCreateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likesCreateManyArgs>(args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likesCreateManyAndReturnArgs>(args?: SelectSubset<T, likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends likesDeleteArgs>(args: SelectSubset<T, likesDeleteArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likesUpdateArgs>(args: SelectSubset<T, likesUpdateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likesDeleteManyArgs>(args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likesUpdateManyArgs>(args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends likesUpdateManyAndReturnArgs>(args: SelectSubset<T, likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends likesUpsertArgs>(args: SelectSubset<T, likesUpsertArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends likes$postsArgs<ExtArgs> = {}>(args?: Subset<T, likes$postsArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends likes$usersArgs<ExtArgs> = {}>(args?: Subset<T, likes$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the likes model
   */
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'Int'>
    readonly user_id: FieldRef<"likes", 'Int'>
    readonly post_id: FieldRef<"likes", 'Int'>
    readonly create_at: FieldRef<"likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data?: XOR<likesCreateInput, likesUncheckedCreateInput>
  }

  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likes createManyAndReturn
   */
  export type likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * likes updateManyAndReturn
   */
  export type likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }

  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * likes.posts
   */
  export type likes$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * likes.users
   */
  export type likes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    image: string | null
    created_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    image: string | null
    created_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    content: number
    image: number
    created_at: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    image?: true
    created_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    image?: true
    created_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    image?: true
    created_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    user_id: number | null
    title: string
    content: string
    image: string | null
    created_at: Date | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
    comments?: boolean | posts$commentsArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    post_categories?: boolean | posts$post_categoriesArgs<ExtArgs>
    users?: boolean | posts$usersArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
    users?: boolean | posts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
    users?: boolean | posts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    created_at?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "content" | "image" | "created_at", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | posts$commentsArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    post_categories?: boolean | posts$post_categoriesArgs<ExtArgs>
    users?: boolean | posts$usersArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | posts$usersArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | posts$usersArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      post_categories: Prisma.$post_categoriesPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      title: string
      content: string
      image: string | null
      created_at: Date | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends posts$commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_categories<T extends posts$post_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends posts$usersArgs<ExtArgs> = {}>(args?: Subset<T, posts$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly user_id: FieldRef<"posts", 'Int'>
    readonly title: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly image: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.comments
   */
  export type posts$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * posts.post_categories
   */
  export type posts$post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    cursor?: post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * posts.users
   */
  export type posts$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    slug: string
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    post_categories?: boolean | categories$post_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post_categories?: boolean | categories$post_categoriesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      post_categories: Prisma.$post_categoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post_categories<T extends categories$post_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$post_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly slug: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.post_categories
   */
  export type categories$post_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    cursor?: post_categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model post_categories
   */

  export type AggregatePost_categories = {
    _count: Post_categoriesCountAggregateOutputType | null
    _avg: Post_categoriesAvgAggregateOutputType | null
    _sum: Post_categoriesSumAggregateOutputType | null
    _min: Post_categoriesMinAggregateOutputType | null
    _max: Post_categoriesMaxAggregateOutputType | null
  }

  export type Post_categoriesAvgAggregateOutputType = {
    post_id: number | null
    category_id: number | null
  }

  export type Post_categoriesSumAggregateOutputType = {
    post_id: number | null
    category_id: number | null
  }

  export type Post_categoriesMinAggregateOutputType = {
    post_id: number | null
    category_id: number | null
  }

  export type Post_categoriesMaxAggregateOutputType = {
    post_id: number | null
    category_id: number | null
  }

  export type Post_categoriesCountAggregateOutputType = {
    post_id: number
    category_id: number
    _all: number
  }


  export type Post_categoriesAvgAggregateInputType = {
    post_id?: true
    category_id?: true
  }

  export type Post_categoriesSumAggregateInputType = {
    post_id?: true
    category_id?: true
  }

  export type Post_categoriesMinAggregateInputType = {
    post_id?: true
    category_id?: true
  }

  export type Post_categoriesMaxAggregateInputType = {
    post_id?: true
    category_id?: true
  }

  export type Post_categoriesCountAggregateInputType = {
    post_id?: true
    category_id?: true
    _all?: true
  }

  export type Post_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_categories to aggregate.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_categories
    **/
    _count?: true | Post_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_categoriesMaxAggregateInputType
  }

  export type GetPost_categoriesAggregateType<T extends Post_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_categories[P]>
      : GetScalarType<T[P], AggregatePost_categories[P]>
  }




  export type post_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_categoriesWhereInput
    orderBy?: post_categoriesOrderByWithAggregationInput | post_categoriesOrderByWithAggregationInput[]
    by: Post_categoriesScalarFieldEnum[] | Post_categoriesScalarFieldEnum
    having?: post_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_categoriesCountAggregateInputType | true
    _avg?: Post_categoriesAvgAggregateInputType
    _sum?: Post_categoriesSumAggregateInputType
    _min?: Post_categoriesMinAggregateInputType
    _max?: Post_categoriesMaxAggregateInputType
  }

  export type Post_categoriesGroupByOutputType = {
    post_id: number
    category_id: number
    _count: Post_categoriesCountAggregateOutputType | null
    _avg: Post_categoriesAvgAggregateOutputType | null
    _sum: Post_categoriesSumAggregateOutputType | null
    _min: Post_categoriesMinAggregateOutputType | null
    _max: Post_categoriesMaxAggregateOutputType | null
  }

  type GetPost_categoriesGroupByPayload<T extends post_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Post_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type post_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    category_id?: boolean
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post_categories"]>

  export type post_categoriesSelectScalar = {
    post_id?: boolean
    category_id?: boolean
  }

  export type post_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "category_id", ExtArgs["result"]["post_categories"]>
  export type post_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type post_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }
  export type post_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    posts?: boolean | postsDefaultArgs<ExtArgs>
  }

  export type $post_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_categories"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs>
      posts: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: number
      category_id: number
    }, ExtArgs["result"]["post_categories"]>
    composites: {}
  }

  type post_categoriesGetPayload<S extends boolean | null | undefined | post_categoriesDefaultArgs> = $Result.GetResult<Prisma.$post_categoriesPayload, S>

  type post_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_categoriesCountAggregateInputType | true
    }

  export interface post_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_categories'], meta: { name: 'post_categories' } }
    /**
     * Find zero or one Post_categories that matches the filter.
     * @param {post_categoriesFindUniqueArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_categoriesFindUniqueArgs>(args: SelectSubset<T, post_categoriesFindUniqueArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, post_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindFirstArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_categoriesFindFirstArgs>(args?: SelectSubset<T, post_categoriesFindFirstArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindFirstOrThrowArgs} args - Arguments to find a Post_categories
     * @example
     * // Get one Post_categories
     * const post_categories = await prisma.post_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, post_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_categories
     * const post_categories = await prisma.post_categories.findMany()
     * 
     * // Get first 10 Post_categories
     * const post_categories = await prisma.post_categories.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const post_categoriesWithPost_idOnly = await prisma.post_categories.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends post_categoriesFindManyArgs>(args?: SelectSubset<T, post_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_categories.
     * @param {post_categoriesCreateArgs} args - Arguments to create a Post_categories.
     * @example
     * // Create one Post_categories
     * const Post_categories = await prisma.post_categories.create({
     *   data: {
     *     // ... data to create a Post_categories
     *   }
     * })
     * 
     */
    create<T extends post_categoriesCreateArgs>(args: SelectSubset<T, post_categoriesCreateArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_categories.
     * @param {post_categoriesCreateManyArgs} args - Arguments to create many Post_categories.
     * @example
     * // Create many Post_categories
     * const post_categories = await prisma.post_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_categoriesCreateManyArgs>(args?: SelectSubset<T, post_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_categories and returns the data saved in the database.
     * @param {post_categoriesCreateManyAndReturnArgs} args - Arguments to create many Post_categories.
     * @example
     * // Create many Post_categories
     * const post_categories = await prisma.post_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_categories and only return the `post_id`
     * const post_categoriesWithPost_idOnly = await prisma.post_categories.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, post_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_categories.
     * @param {post_categoriesDeleteArgs} args - Arguments to delete one Post_categories.
     * @example
     * // Delete one Post_categories
     * const Post_categories = await prisma.post_categories.delete({
     *   where: {
     *     // ... filter to delete one Post_categories
     *   }
     * })
     * 
     */
    delete<T extends post_categoriesDeleteArgs>(args: SelectSubset<T, post_categoriesDeleteArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_categories.
     * @param {post_categoriesUpdateArgs} args - Arguments to update one Post_categories.
     * @example
     * // Update one Post_categories
     * const post_categories = await prisma.post_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_categoriesUpdateArgs>(args: SelectSubset<T, post_categoriesUpdateArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_categories.
     * @param {post_categoriesDeleteManyArgs} args - Arguments to filter Post_categories to delete.
     * @example
     * // Delete a few Post_categories
     * const { count } = await prisma.post_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_categoriesDeleteManyArgs>(args?: SelectSubset<T, post_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_categories
     * const post_categories = await prisma.post_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_categoriesUpdateManyArgs>(args: SelectSubset<T, post_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_categories and returns the data updated in the database.
     * @param {post_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Post_categories.
     * @example
     * // Update many Post_categories
     * const post_categories = await prisma.post_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_categories and only return the `post_id`
     * const post_categoriesWithPost_idOnly = await prisma.post_categories.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends post_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, post_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_categories.
     * @param {post_categoriesUpsertArgs} args - Arguments to update or create a Post_categories.
     * @example
     * // Update or create a Post_categories
     * const post_categories = await prisma.post_categories.upsert({
     *   create: {
     *     // ... data to create a Post_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_categories we want to update
     *   }
     * })
     */
    upsert<T extends post_categoriesUpsertArgs>(args: SelectSubset<T, post_categoriesUpsertArgs<ExtArgs>>): Prisma__post_categoriesClient<$Result.GetResult<Prisma.$post_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesCountArgs} args - Arguments to filter Post_categories to count.
     * @example
     * // Count the number of Post_categories
     * const count = await prisma.post_categories.count({
     *   where: {
     *     // ... the filter for the Post_categories we want to count
     *   }
     * })
    **/
    count<T extends post_categoriesCountArgs>(
      args?: Subset<T, post_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_categoriesAggregateArgs>(args: Subset<T, Post_categoriesAggregateArgs>): Prisma.PrismaPromise<GetPost_categoriesAggregateType<T>>

    /**
     * Group by Post_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends post_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: post_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, post_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_categories model
   */
  readonly fields: post_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    posts<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post_categories model
   */
  interface post_categoriesFieldRefs {
    readonly post_id: FieldRef<"post_categories", 'Int'>
    readonly category_id: FieldRef<"post_categories", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * post_categories findUnique
   */
  export type post_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories findUniqueOrThrow
   */
  export type post_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories findFirst
   */
  export type post_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_categories.
     */
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories findFirstOrThrow
   */
  export type post_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_categories.
     */
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories findMany
   */
  export type post_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which post_categories to fetch.
     */
    where?: post_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_categories to fetch.
     */
    orderBy?: post_categoriesOrderByWithRelationInput | post_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_categories.
     */
    cursor?: post_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_categories.
     */
    distinct?: Post_categoriesScalarFieldEnum | Post_categoriesScalarFieldEnum[]
  }

  /**
   * post_categories create
   */
  export type post_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a post_categories.
     */
    data: XOR<post_categoriesCreateInput, post_categoriesUncheckedCreateInput>
  }

  /**
   * post_categories createMany
   */
  export type post_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_categories.
     */
    data: post_categoriesCreateManyInput | post_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_categories createManyAndReturn
   */
  export type post_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many post_categories.
     */
    data: post_categoriesCreateManyInput | post_categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_categories update
   */
  export type post_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a post_categories.
     */
    data: XOR<post_categoriesUpdateInput, post_categoriesUncheckedUpdateInput>
    /**
     * Choose, which post_categories to update.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories updateMany
   */
  export type post_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_categories.
     */
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which post_categories to update
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to update.
     */
    limit?: number
  }

  /**
   * post_categories updateManyAndReturn
   */
  export type post_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update post_categories.
     */
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which post_categories to update
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_categories upsert
   */
  export type post_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the post_categories to update in case it exists.
     */
    where: post_categoriesWhereUniqueInput
    /**
     * In case the post_categories found by the `where` argument doesn't exist, create a new post_categories with this data.
     */
    create: XOR<post_categoriesCreateInput, post_categoriesUncheckedCreateInput>
    /**
     * In case the post_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_categoriesUpdateInput, post_categoriesUncheckedUpdateInput>
  }

  /**
   * post_categories delete
   */
  export type post_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
    /**
     * Filter which post_categories to delete.
     */
    where: post_categoriesWhereUniqueInput
  }

  /**
   * post_categories deleteMany
   */
  export type post_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_categories to delete
     */
    where?: post_categoriesWhereInput
    /**
     * Limit how many post_categories to delete.
     */
    limit?: number
  }

  /**
   * post_categories without action
   */
  export type post_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_categories
     */
    select?: post_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_categories
     */
    omit?: post_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    created_at: Date | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    created_at: Date | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    created_at: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    created_at?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    created_at: Date | null
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    created_at?: boolean
    password?: boolean
    comments?: boolean | users$commentsArgs<ExtArgs>
    follows_follows_follower_idTousers?: boolean | users$follows_follows_follower_idTousersArgs<ExtArgs>
    follows_follows_following_idTousers?: boolean | users$follows_follows_following_idTousersArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    notifications_notifications_actor_idTousers?: boolean | users$notifications_notifications_actor_idTousersArgs<ExtArgs>
    notifications_notifications_user_idTousers?: boolean | users$notifications_notifications_user_idTousersArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    time_capsules?: boolean | users$time_capsulesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    created_at?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    created_at?: boolean
    password?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    created_at?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "created_at" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | users$commentsArgs<ExtArgs>
    follows_follows_follower_idTousers?: boolean | users$follows_follows_follower_idTousersArgs<ExtArgs>
    follows_follows_following_idTousers?: boolean | users$follows_follows_following_idTousersArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    notifications_notifications_actor_idTousers?: boolean | users$notifications_notifications_actor_idTousersArgs<ExtArgs>
    notifications_notifications_user_idTousers?: boolean | users$notifications_notifications_user_idTousersArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    time_capsules?: boolean | users$time_capsulesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      comments: Prisma.$commentsPayload<ExtArgs>[]
      follows_follows_follower_idTousers: Prisma.$followsPayload<ExtArgs>[]
      follows_follows_following_idTousers: Prisma.$followsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      notifications_notifications_actor_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
      notifications_notifications_user_idTousers: Prisma.$notificationsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      time_capsules: Prisma.$time_capsulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      created_at: Date | null
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends users$commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows_follows_follower_idTousers<T extends users$follows_follows_follower_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$follows_follows_follower_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    follows_follows_following_idTousers<T extends users$follows_follows_following_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$follows_follows_following_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$followsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_actor_idTousers<T extends users$notifications_notifications_actor_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_actor_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications_notifications_user_idTousers<T extends users$notifications_notifications_user_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$notifications_notifications_user_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    time_capsules<T extends users$time_capsulesArgs<ExtArgs> = {}>(args?: Subset<T, users$time_capsulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.comments
   */
  export type users$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comments
     */
    omit?: commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commentsInclude<ExtArgs> | null
    where?: commentsWhereInput
    orderBy?: commentsOrderByWithRelationInput | commentsOrderByWithRelationInput[]
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * users.follows_follows_follower_idTousers
   */
  export type users$follows_follows_follower_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    where?: followsWhereInput
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    cursor?: followsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * users.follows_follows_following_idTousers
   */
  export type users$follows_follows_following_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the follows
     */
    select?: followsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the follows
     */
    omit?: followsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: followsInclude<ExtArgs> | null
    where?: followsWhereInput
    orderBy?: followsOrderByWithRelationInput | followsOrderByWithRelationInput[]
    cursor?: followsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowsScalarFieldEnum | FollowsScalarFieldEnum[]
  }

  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_actor_idTousers
   */
  export type users$notifications_notifications_actor_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.notifications_notifications_user_idTousers
   */
  export type users$notifications_notifications_user_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    cursor?: notificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.time_capsules
   */
  export type users$time_capsulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    where?: time_capsulesWhereInput
    orderBy?: time_capsulesOrderByWithRelationInput | time_capsulesOrderByWithRelationInput[]
    cursor?: time_capsulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Time_capsulesScalarFieldEnum | Time_capsulesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    actor_id: number | null
    entity_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    actor_id: number | null
    entity_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    actor_id: number | null
    type: $Enums.notification_type | null
    title: string | null
    message: string | null
    entity_id: number | null
    entity_type: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    actor_id: number | null
    type: $Enums.notification_type | null
    title: string | null
    message: string | null
    entity_id: number | null
    entity_type: string | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type NotificationsCountAggregateOutputType = {
    id: number
    user_id: number
    actor_id: number
    type: number
    title: number
    message: number
    entity_id: number
    entity_type: number
    is_read: number
    created_at: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    id?: true
    user_id?: true
    actor_id?: true
    entity_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    id?: true
    user_id?: true
    actor_id?: true
    entity_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    id?: true
    user_id?: true
    actor_id?: true
    type?: true
    title?: true
    message?: true
    entity_id?: true
    entity_type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsMaxAggregateInputType = {
    id?: true
    user_id?: true
    actor_id?: true
    type?: true
    title?: true
    message?: true
    entity_id?: true
    entity_type?: true
    is_read?: true
    created_at?: true
  }

  export type NotificationsCountAggregateInputType = {
    id?: true
    user_id?: true
    actor_id?: true
    type?: true
    title?: true
    message?: true
    entity_id?: true
    entity_type?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to aggregate.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type notificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificationsWhereInput
    orderBy?: notificationsOrderByWithAggregationInput | notificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: notificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    id: number
    user_id: number
    actor_id: number | null
    type: $Enums.notification_type
    title: string | null
    message: string | null
    entity_id: number | null
    entity_type: string | null
    is_read: boolean | null
    created_at: Date | null
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type notificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    actor_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    entity_id?: boolean
    entity_type?: boolean
    is_read?: boolean
    created_at?: boolean
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    actor_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    entity_id?: boolean
    entity_type?: boolean
    is_read?: boolean
    created_at?: boolean
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    actor_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    entity_id?: boolean
    entity_type?: boolean
    is_read?: boolean
    created_at?: boolean
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type notificationsSelectScalar = {
    id?: boolean
    user_id?: boolean
    actor_id?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    entity_id?: boolean
    entity_type?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type notificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "actor_id" | "type" | "title" | "message" | "entity_id" | "entity_type" | "is_read" | "created_at", ExtArgs["result"]["notifications"]>
  export type notificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_notifications_actor_idTousers?: boolean | notifications$users_notifications_actor_idTousersArgs<ExtArgs>
    users_notifications_user_idTousers?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $notificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notifications"
    objects: {
      users_notifications_actor_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_notifications_user_idTousers: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      actor_id: number | null
      type: $Enums.notification_type
      title: string | null
      message: string | null
      entity_id: number | null
      entity_type: string | null
      is_read: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = $Result.GetResult<Prisma.$notificationsPayload, S>

  type notificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface notificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notifications'], meta: { name: 'notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {notificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificationsFindUniqueArgs>(args: SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificationsFindFirstArgs>(args?: SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationsWithIdOnly = await prisma.notifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends notificationsFindManyArgs>(args?: SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {notificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends notificationsCreateArgs>(args: SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {notificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificationsCreateManyArgs>(args?: SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {notificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {notificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends notificationsDeleteArgs>(args: SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {notificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificationsUpdateArgs>(args: SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {notificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificationsDeleteManyArgs>(args?: SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificationsUpdateManyArgs>(args: SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {notificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationsWithIdOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {notificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends notificationsUpsertArgs>(args: SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma__notificationsClient<$Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends notificationsCountArgs>(
      args?: Subset<T, notificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends notificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificationsGroupByArgs['orderBy'] }
        : { orderBy?: notificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notifications model
   */
  readonly fields: notificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_notifications_actor_idTousers<T extends notifications$users_notifications_actor_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, notifications$users_notifications_actor_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_notifications_user_idTousers<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the notifications model
   */
  interface notificationsFieldRefs {
    readonly id: FieldRef<"notifications", 'Int'>
    readonly user_id: FieldRef<"notifications", 'Int'>
    readonly actor_id: FieldRef<"notifications", 'Int'>
    readonly type: FieldRef<"notifications", 'notification_type'>
    readonly title: FieldRef<"notifications", 'String'>
    readonly message: FieldRef<"notifications", 'String'>
    readonly entity_id: FieldRef<"notifications", 'Int'>
    readonly entity_type: FieldRef<"notifications", 'String'>
    readonly is_read: FieldRef<"notifications", 'Boolean'>
    readonly created_at: FieldRef<"notifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notifications findUnique
   */
  export type notificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findUniqueOrThrow
   */
  export type notificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications findFirst
   */
  export type notificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findFirstOrThrow
   */
  export type notificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications findMany
   */
  export type notificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter, which notifications to fetch.
     */
    where?: notificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notifications to fetch.
     */
    orderBy?: notificationsOrderByWithRelationInput | notificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notifications.
     */
    cursor?: notificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * notifications create
   */
  export type notificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a notifications.
     */
    data: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
  }

  /**
   * notifications createMany
   */
  export type notificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notifications createManyAndReturn
   */
  export type notificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to create many notifications.
     */
    data: notificationsCreateManyInput | notificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications update
   */
  export type notificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a notifications.
     */
    data: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
    /**
     * Choose, which notifications to update.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications updateMany
   */
  export type notificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
  }

  /**
   * notifications updateManyAndReturn
   */
  export type notificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * The data used to update notifications.
     */
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyInput>
    /**
     * Filter which notifications to update
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notifications upsert
   */
  export type notificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the notifications to update in case it exists.
     */
    where: notificationsWhereUniqueInput
    /**
     * In case the notifications found by the `where` argument doesn't exist, create a new notifications with this data.
     */
    create: XOR<notificationsCreateInput, notificationsUncheckedCreateInput>
    /**
     * In case the notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificationsUpdateInput, notificationsUncheckedUpdateInput>
  }

  /**
   * notifications delete
   */
  export type notificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
    /**
     * Filter which notifications to delete.
     */
    where: notificationsWhereUniqueInput
  }

  /**
   * notifications deleteMany
   */
  export type notificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notifications to delete
     */
    where?: notificationsWhereInput
    /**
     * Limit how many notifications to delete.
     */
    limit?: number
  }

  /**
   * notifications.users_notifications_actor_idTousers
   */
  export type notifications$users_notifications_actor_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * notifications without action
   */
  export type notificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notifications
     */
    select?: notificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notifications
     */
    omit?: notificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificationsInclude<ExtArgs> | null
  }


  /**
   * Model time_capsules
   */

  export type AggregateTime_capsules = {
    _count: Time_capsulesCountAggregateOutputType | null
    _avg: Time_capsulesAvgAggregateOutputType | null
    _sum: Time_capsulesSumAggregateOutputType | null
    _min: Time_capsulesMinAggregateOutputType | null
    _max: Time_capsulesMaxAggregateOutputType | null
  }

  export type Time_capsulesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Time_capsulesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Time_capsulesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    media_url: string | null
    created_at: Date | null
    unlock_at: Date | null
    is_unlocked: boolean | null
    is_public: boolean | null
    allow_comments: boolean | null
    mood: string | null
  }

  export type Time_capsulesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    title: string | null
    content: string | null
    media_url: string | null
    created_at: Date | null
    unlock_at: Date | null
    is_unlocked: boolean | null
    is_public: boolean | null
    allow_comments: boolean | null
    mood: string | null
  }

  export type Time_capsulesCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    content: number
    media_url: number
    created_at: number
    unlock_at: number
    is_unlocked: number
    is_public: number
    allow_comments: number
    mood: number
    _all: number
  }


  export type Time_capsulesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Time_capsulesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Time_capsulesMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    media_url?: true
    created_at?: true
    unlock_at?: true
    is_unlocked?: true
    is_public?: true
    allow_comments?: true
    mood?: true
  }

  export type Time_capsulesMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    media_url?: true
    created_at?: true
    unlock_at?: true
    is_unlocked?: true
    is_public?: true
    allow_comments?: true
    mood?: true
  }

  export type Time_capsulesCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    content?: true
    media_url?: true
    created_at?: true
    unlock_at?: true
    is_unlocked?: true
    is_public?: true
    allow_comments?: true
    mood?: true
    _all?: true
  }

  export type Time_capsulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which time_capsules to aggregate.
     */
    where?: time_capsulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_capsules to fetch.
     */
    orderBy?: time_capsulesOrderByWithRelationInput | time_capsulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: time_capsulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_capsules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_capsules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned time_capsules
    **/
    _count?: true | Time_capsulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Time_capsulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Time_capsulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Time_capsulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Time_capsulesMaxAggregateInputType
  }

  export type GetTime_capsulesAggregateType<T extends Time_capsulesAggregateArgs> = {
        [P in keyof T & keyof AggregateTime_capsules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTime_capsules[P]>
      : GetScalarType<T[P], AggregateTime_capsules[P]>
  }




  export type time_capsulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: time_capsulesWhereInput
    orderBy?: time_capsulesOrderByWithAggregationInput | time_capsulesOrderByWithAggregationInput[]
    by: Time_capsulesScalarFieldEnum[] | Time_capsulesScalarFieldEnum
    having?: time_capsulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Time_capsulesCountAggregateInputType | true
    _avg?: Time_capsulesAvgAggregateInputType
    _sum?: Time_capsulesSumAggregateInputType
    _min?: Time_capsulesMinAggregateInputType
    _max?: Time_capsulesMaxAggregateInputType
  }

  export type Time_capsulesGroupByOutputType = {
    id: number
    user_id: number
    title: string | null
    content: string
    media_url: string | null
    created_at: Date | null
    unlock_at: Date
    is_unlocked: boolean | null
    is_public: boolean | null
    allow_comments: boolean | null
    mood: string | null
    _count: Time_capsulesCountAggregateOutputType | null
    _avg: Time_capsulesAvgAggregateOutputType | null
    _sum: Time_capsulesSumAggregateOutputType | null
    _min: Time_capsulesMinAggregateOutputType | null
    _max: Time_capsulesMaxAggregateOutputType | null
  }

  type GetTime_capsulesGroupByPayload<T extends time_capsulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Time_capsulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Time_capsulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Time_capsulesGroupByOutputType[P]>
            : GetScalarType<T[P], Time_capsulesGroupByOutputType[P]>
        }
      >
    >


  export type time_capsulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    media_url?: boolean
    created_at?: boolean
    unlock_at?: boolean
    is_unlocked?: boolean
    is_public?: boolean
    allow_comments?: boolean
    mood?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_capsules"]>

  export type time_capsulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    media_url?: boolean
    created_at?: boolean
    unlock_at?: boolean
    is_unlocked?: boolean
    is_public?: boolean
    allow_comments?: boolean
    mood?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_capsules"]>

  export type time_capsulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    media_url?: boolean
    created_at?: boolean
    unlock_at?: boolean
    is_unlocked?: boolean
    is_public?: boolean
    allow_comments?: boolean
    mood?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time_capsules"]>

  export type time_capsulesSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    content?: boolean
    media_url?: boolean
    created_at?: boolean
    unlock_at?: boolean
    is_unlocked?: boolean
    is_public?: boolean
    allow_comments?: boolean
    mood?: boolean
  }

  export type time_capsulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "content" | "media_url" | "created_at" | "unlock_at" | "is_unlocked" | "is_public" | "allow_comments" | "mood", ExtArgs["result"]["time_capsules"]>
  export type time_capsulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type time_capsulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type time_capsulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $time_capsulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "time_capsules"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      title: string | null
      content: string
      media_url: string | null
      created_at: Date | null
      unlock_at: Date
      is_unlocked: boolean | null
      is_public: boolean | null
      allow_comments: boolean | null
      mood: string | null
    }, ExtArgs["result"]["time_capsules"]>
    composites: {}
  }

  type time_capsulesGetPayload<S extends boolean | null | undefined | time_capsulesDefaultArgs> = $Result.GetResult<Prisma.$time_capsulesPayload, S>

  type time_capsulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<time_capsulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Time_capsulesCountAggregateInputType | true
    }

  export interface time_capsulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['time_capsules'], meta: { name: 'time_capsules' } }
    /**
     * Find zero or one Time_capsules that matches the filter.
     * @param {time_capsulesFindUniqueArgs} args - Arguments to find a Time_capsules
     * @example
     * // Get one Time_capsules
     * const time_capsules = await prisma.time_capsules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends time_capsulesFindUniqueArgs>(args: SelectSubset<T, time_capsulesFindUniqueArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Time_capsules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {time_capsulesFindUniqueOrThrowArgs} args - Arguments to find a Time_capsules
     * @example
     * // Get one Time_capsules
     * const time_capsules = await prisma.time_capsules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends time_capsulesFindUniqueOrThrowArgs>(args: SelectSubset<T, time_capsulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time_capsules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesFindFirstArgs} args - Arguments to find a Time_capsules
     * @example
     * // Get one Time_capsules
     * const time_capsules = await prisma.time_capsules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends time_capsulesFindFirstArgs>(args?: SelectSubset<T, time_capsulesFindFirstArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time_capsules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesFindFirstOrThrowArgs} args - Arguments to find a Time_capsules
     * @example
     * // Get one Time_capsules
     * const time_capsules = await prisma.time_capsules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends time_capsulesFindFirstOrThrowArgs>(args?: SelectSubset<T, time_capsulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Time_capsules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Time_capsules
     * const time_capsules = await prisma.time_capsules.findMany()
     * 
     * // Get first 10 Time_capsules
     * const time_capsules = await prisma.time_capsules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const time_capsulesWithIdOnly = await prisma.time_capsules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends time_capsulesFindManyArgs>(args?: SelectSubset<T, time_capsulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Time_capsules.
     * @param {time_capsulesCreateArgs} args - Arguments to create a Time_capsules.
     * @example
     * // Create one Time_capsules
     * const Time_capsules = await prisma.time_capsules.create({
     *   data: {
     *     // ... data to create a Time_capsules
     *   }
     * })
     * 
     */
    create<T extends time_capsulesCreateArgs>(args: SelectSubset<T, time_capsulesCreateArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Time_capsules.
     * @param {time_capsulesCreateManyArgs} args - Arguments to create many Time_capsules.
     * @example
     * // Create many Time_capsules
     * const time_capsules = await prisma.time_capsules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends time_capsulesCreateManyArgs>(args?: SelectSubset<T, time_capsulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Time_capsules and returns the data saved in the database.
     * @param {time_capsulesCreateManyAndReturnArgs} args - Arguments to create many Time_capsules.
     * @example
     * // Create many Time_capsules
     * const time_capsules = await prisma.time_capsules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Time_capsules and only return the `id`
     * const time_capsulesWithIdOnly = await prisma.time_capsules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends time_capsulesCreateManyAndReturnArgs>(args?: SelectSubset<T, time_capsulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Time_capsules.
     * @param {time_capsulesDeleteArgs} args - Arguments to delete one Time_capsules.
     * @example
     * // Delete one Time_capsules
     * const Time_capsules = await prisma.time_capsules.delete({
     *   where: {
     *     // ... filter to delete one Time_capsules
     *   }
     * })
     * 
     */
    delete<T extends time_capsulesDeleteArgs>(args: SelectSubset<T, time_capsulesDeleteArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Time_capsules.
     * @param {time_capsulesUpdateArgs} args - Arguments to update one Time_capsules.
     * @example
     * // Update one Time_capsules
     * const time_capsules = await prisma.time_capsules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends time_capsulesUpdateArgs>(args: SelectSubset<T, time_capsulesUpdateArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Time_capsules.
     * @param {time_capsulesDeleteManyArgs} args - Arguments to filter Time_capsules to delete.
     * @example
     * // Delete a few Time_capsules
     * const { count } = await prisma.time_capsules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends time_capsulesDeleteManyArgs>(args?: SelectSubset<T, time_capsulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Time_capsules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Time_capsules
     * const time_capsules = await prisma.time_capsules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends time_capsulesUpdateManyArgs>(args: SelectSubset<T, time_capsulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Time_capsules and returns the data updated in the database.
     * @param {time_capsulesUpdateManyAndReturnArgs} args - Arguments to update many Time_capsules.
     * @example
     * // Update many Time_capsules
     * const time_capsules = await prisma.time_capsules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Time_capsules and only return the `id`
     * const time_capsulesWithIdOnly = await prisma.time_capsules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends time_capsulesUpdateManyAndReturnArgs>(args: SelectSubset<T, time_capsulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Time_capsules.
     * @param {time_capsulesUpsertArgs} args - Arguments to update or create a Time_capsules.
     * @example
     * // Update or create a Time_capsules
     * const time_capsules = await prisma.time_capsules.upsert({
     *   create: {
     *     // ... data to create a Time_capsules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Time_capsules we want to update
     *   }
     * })
     */
    upsert<T extends time_capsulesUpsertArgs>(args: SelectSubset<T, time_capsulesUpsertArgs<ExtArgs>>): Prisma__time_capsulesClient<$Result.GetResult<Prisma.$time_capsulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Time_capsules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesCountArgs} args - Arguments to filter Time_capsules to count.
     * @example
     * // Count the number of Time_capsules
     * const count = await prisma.time_capsules.count({
     *   where: {
     *     // ... the filter for the Time_capsules we want to count
     *   }
     * })
    **/
    count<T extends time_capsulesCountArgs>(
      args?: Subset<T, time_capsulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Time_capsulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Time_capsules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Time_capsulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Time_capsulesAggregateArgs>(args: Subset<T, Time_capsulesAggregateArgs>): Prisma.PrismaPromise<GetTime_capsulesAggregateType<T>>

    /**
     * Group by Time_capsules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {time_capsulesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends time_capsulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: time_capsulesGroupByArgs['orderBy'] }
        : { orderBy?: time_capsulesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, time_capsulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTime_capsulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the time_capsules model
   */
  readonly fields: time_capsulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for time_capsules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__time_capsulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the time_capsules model
   */
  interface time_capsulesFieldRefs {
    readonly id: FieldRef<"time_capsules", 'Int'>
    readonly user_id: FieldRef<"time_capsules", 'Int'>
    readonly title: FieldRef<"time_capsules", 'String'>
    readonly content: FieldRef<"time_capsules", 'String'>
    readonly media_url: FieldRef<"time_capsules", 'String'>
    readonly created_at: FieldRef<"time_capsules", 'DateTime'>
    readonly unlock_at: FieldRef<"time_capsules", 'DateTime'>
    readonly is_unlocked: FieldRef<"time_capsules", 'Boolean'>
    readonly is_public: FieldRef<"time_capsules", 'Boolean'>
    readonly allow_comments: FieldRef<"time_capsules", 'Boolean'>
    readonly mood: FieldRef<"time_capsules", 'String'>
  }
    

  // Custom InputTypes
  /**
   * time_capsules findUnique
   */
  export type time_capsulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter, which time_capsules to fetch.
     */
    where: time_capsulesWhereUniqueInput
  }

  /**
   * time_capsules findUniqueOrThrow
   */
  export type time_capsulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter, which time_capsules to fetch.
     */
    where: time_capsulesWhereUniqueInput
  }

  /**
   * time_capsules findFirst
   */
  export type time_capsulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter, which time_capsules to fetch.
     */
    where?: time_capsulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_capsules to fetch.
     */
    orderBy?: time_capsulesOrderByWithRelationInput | time_capsulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for time_capsules.
     */
    cursor?: time_capsulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_capsules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_capsules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of time_capsules.
     */
    distinct?: Time_capsulesScalarFieldEnum | Time_capsulesScalarFieldEnum[]
  }

  /**
   * time_capsules findFirstOrThrow
   */
  export type time_capsulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter, which time_capsules to fetch.
     */
    where?: time_capsulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_capsules to fetch.
     */
    orderBy?: time_capsulesOrderByWithRelationInput | time_capsulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for time_capsules.
     */
    cursor?: time_capsulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_capsules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_capsules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of time_capsules.
     */
    distinct?: Time_capsulesScalarFieldEnum | Time_capsulesScalarFieldEnum[]
  }

  /**
   * time_capsules findMany
   */
  export type time_capsulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter, which time_capsules to fetch.
     */
    where?: time_capsulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of time_capsules to fetch.
     */
    orderBy?: time_capsulesOrderByWithRelationInput | time_capsulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing time_capsules.
     */
    cursor?: time_capsulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` time_capsules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` time_capsules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of time_capsules.
     */
    distinct?: Time_capsulesScalarFieldEnum | Time_capsulesScalarFieldEnum[]
  }

  /**
   * time_capsules create
   */
  export type time_capsulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * The data needed to create a time_capsules.
     */
    data: XOR<time_capsulesCreateInput, time_capsulesUncheckedCreateInput>
  }

  /**
   * time_capsules createMany
   */
  export type time_capsulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many time_capsules.
     */
    data: time_capsulesCreateManyInput | time_capsulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * time_capsules createManyAndReturn
   */
  export type time_capsulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * The data used to create many time_capsules.
     */
    data: time_capsulesCreateManyInput | time_capsulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * time_capsules update
   */
  export type time_capsulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * The data needed to update a time_capsules.
     */
    data: XOR<time_capsulesUpdateInput, time_capsulesUncheckedUpdateInput>
    /**
     * Choose, which time_capsules to update.
     */
    where: time_capsulesWhereUniqueInput
  }

  /**
   * time_capsules updateMany
   */
  export type time_capsulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update time_capsules.
     */
    data: XOR<time_capsulesUpdateManyMutationInput, time_capsulesUncheckedUpdateManyInput>
    /**
     * Filter which time_capsules to update
     */
    where?: time_capsulesWhereInput
    /**
     * Limit how many time_capsules to update.
     */
    limit?: number
  }

  /**
   * time_capsules updateManyAndReturn
   */
  export type time_capsulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * The data used to update time_capsules.
     */
    data: XOR<time_capsulesUpdateManyMutationInput, time_capsulesUncheckedUpdateManyInput>
    /**
     * Filter which time_capsules to update
     */
    where?: time_capsulesWhereInput
    /**
     * Limit how many time_capsules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * time_capsules upsert
   */
  export type time_capsulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * The filter to search for the time_capsules to update in case it exists.
     */
    where: time_capsulesWhereUniqueInput
    /**
     * In case the time_capsules found by the `where` argument doesn't exist, create a new time_capsules with this data.
     */
    create: XOR<time_capsulesCreateInput, time_capsulesUncheckedCreateInput>
    /**
     * In case the time_capsules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<time_capsulesUpdateInput, time_capsulesUncheckedUpdateInput>
  }

  /**
   * time_capsules delete
   */
  export type time_capsulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
    /**
     * Filter which time_capsules to delete.
     */
    where: time_capsulesWhereUniqueInput
  }

  /**
   * time_capsules deleteMany
   */
  export type time_capsulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which time_capsules to delete
     */
    where?: time_capsulesWhereInput
    /**
     * Limit how many time_capsules to delete.
     */
    limit?: number
  }

  /**
   * time_capsules without action
   */
  export type time_capsulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the time_capsules
     */
    select?: time_capsulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the time_capsules
     */
    omit?: time_capsulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: time_capsulesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    post_id: 'post_id',
    user_id: 'user_id',
    content: 'content',
    create_at: 'create_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const FollowsScalarFieldEnum: {
    id: 'id',
    follower_id: 'follower_id',
    following_id: 'following_id',
    create_at: 'create_at'
  };

  export type FollowsScalarFieldEnum = (typeof FollowsScalarFieldEnum)[keyof typeof FollowsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id',
    create_at: 'create_at'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    image: 'image',
    created_at: 'created_at'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Post_categoriesScalarFieldEnum: {
    post_id: 'post_id',
    category_id: 'category_id'
  };

  export type Post_categoriesScalarFieldEnum = (typeof Post_categoriesScalarFieldEnum)[keyof typeof Post_categoriesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    created_at: 'created_at',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    actor_id: 'actor_id',
    type: 'type',
    title: 'title',
    message: 'message',
    entity_id: 'entity_id',
    entity_type: 'entity_type',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const Time_capsulesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    content: 'content',
    media_url: 'media_url',
    created_at: 'created_at',
    unlock_at: 'unlock_at',
    is_unlocked: 'is_unlocked',
    is_public: 'is_public',
    allow_comments: 'allow_comments',
    mood: 'mood'
  };

  export type Time_capsulesScalarFieldEnum = (typeof Time_capsulesScalarFieldEnum)[keyof typeof Time_capsulesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'notification_type'
   */
  export type Enumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type'>
    


  /**
   * Reference to a field of type 'notification_type[]'
   */
  export type ListEnumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type commentsWhereInput = {
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    id?: IntFilter<"comments"> | number
    post_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    create_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type commentsOrderByWithRelationInput = {
    id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    content?: SortOrder
    create_at?: SortOrderInput | SortOrder
    posts?: postsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: commentsWhereInput | commentsWhereInput[]
    OR?: commentsWhereInput[]
    NOT?: commentsWhereInput | commentsWhereInput[]
    post_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    create_at?: DateTimeNullableFilter<"comments"> | Date | string | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type commentsOrderByWithAggregationInput = {
    id?: SortOrder
    post_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    content?: SortOrder
    create_at?: SortOrderInput | SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    OR?: commentsScalarWhereWithAggregatesInput[]
    NOT?: commentsScalarWhereWithAggregatesInput | commentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"comments"> | number
    post_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"comments"> | number | null
    content?: StringWithAggregatesFilter<"comments"> | string
    create_at?: DateTimeNullableWithAggregatesFilter<"comments"> | Date | string | null
  }

  export type followsWhereInput = {
    AND?: followsWhereInput | followsWhereInput[]
    OR?: followsWhereInput[]
    NOT?: followsWhereInput | followsWhereInput[]
    id?: IntFilter<"follows"> | number
    follower_id?: IntNullableFilter<"follows"> | number | null
    following_id?: IntNullableFilter<"follows"> | number | null
    create_at?: DateTimeNullableFilter<"follows"> | Date | string | null
    users_follows_follower_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_follows_following_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type followsOrderByWithRelationInput = {
    id?: SortOrder
    follower_id?: SortOrderInput | SortOrder
    following_id?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    users_follows_follower_idTousers?: usersOrderByWithRelationInput
    users_follows_following_idTousers?: usersOrderByWithRelationInput
  }

  export type followsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    follower_id_following_id?: followsFollower_idFollowing_idCompoundUniqueInput
    AND?: followsWhereInput | followsWhereInput[]
    OR?: followsWhereInput[]
    NOT?: followsWhereInput | followsWhereInput[]
    follower_id?: IntNullableFilter<"follows"> | number | null
    following_id?: IntNullableFilter<"follows"> | number | null
    create_at?: DateTimeNullableFilter<"follows"> | Date | string | null
    users_follows_follower_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_follows_following_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "follower_id_following_id">

  export type followsOrderByWithAggregationInput = {
    id?: SortOrder
    follower_id?: SortOrderInput | SortOrder
    following_id?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    _count?: followsCountOrderByAggregateInput
    _avg?: followsAvgOrderByAggregateInput
    _max?: followsMaxOrderByAggregateInput
    _min?: followsMinOrderByAggregateInput
    _sum?: followsSumOrderByAggregateInput
  }

  export type followsScalarWhereWithAggregatesInput = {
    AND?: followsScalarWhereWithAggregatesInput | followsScalarWhereWithAggregatesInput[]
    OR?: followsScalarWhereWithAggregatesInput[]
    NOT?: followsScalarWhereWithAggregatesInput | followsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"follows"> | number
    follower_id?: IntNullableWithAggregatesFilter<"follows"> | number | null
    following_id?: IntNullableWithAggregatesFilter<"follows"> | number | null
    create_at?: DateTimeNullableWithAggregatesFilter<"follows"> | Date | string | null
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: IntFilter<"likes"> | number
    user_id?: IntNullableFilter<"likes"> | number | null
    post_id?: IntNullableFilter<"likes"> | number | null
    create_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    posts?: postsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_post_id?: likesUser_idPost_idCompoundUniqueInput
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    user_id?: IntNullableFilter<"likes"> | number | null
    post_id?: IntNullableFilter<"likes"> | number | null
    create_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "user_id_post_id">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    create_at?: SortOrderInput | SortOrder
    _count?: likesCountOrderByAggregateInput
    _avg?: likesAvgOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
    _sum?: likesSumOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"likes"> | number
    user_id?: IntNullableWithAggregatesFilter<"likes"> | number | null
    post_id?: IntNullableWithAggregatesFilter<"likes"> | number | null
    create_at?: DateTimeNullableWithAggregatesFilter<"likes"> | Date | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    user_id?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    image?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    post_categories?: Post_categoriesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    comments?: commentsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    post_categories?: post_categoriesOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    user_id?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    image?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    post_categories?: Post_categoriesListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    user_id?: IntNullableWithAggregatesFilter<"posts"> | number | null
    title?: StringWithAggregatesFilter<"posts"> | string
    content?: StringWithAggregatesFilter<"posts"> | string
    image?: StringNullableWithAggregatesFilter<"posts"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    slug?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    post_categories?: Post_categoriesListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrderInput | SortOrder
    post_categories?: post_categoriesOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    post_categories?: Post_categoriesListRelationFilter
  }, "id" | "name" | "slug">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    slug?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type post_categoriesWhereInput = {
    AND?: post_categoriesWhereInput | post_categoriesWhereInput[]
    OR?: post_categoriesWhereInput[]
    NOT?: post_categoriesWhereInput | post_categoriesWhereInput[]
    post_id?: IntFilter<"post_categories"> | number
    category_id?: IntFilter<"post_categories"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }

  export type post_categoriesOrderByWithRelationInput = {
    post_id?: SortOrder
    category_id?: SortOrder
    categories?: categoriesOrderByWithRelationInput
    posts?: postsOrderByWithRelationInput
  }

  export type post_categoriesWhereUniqueInput = Prisma.AtLeast<{
    post_id_category_id?: post_categoriesPost_idCategory_idCompoundUniqueInput
    AND?: post_categoriesWhereInput | post_categoriesWhereInput[]
    OR?: post_categoriesWhereInput[]
    NOT?: post_categoriesWhereInput | post_categoriesWhereInput[]
    post_id?: IntFilter<"post_categories"> | number
    category_id?: IntFilter<"post_categories"> | number
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    posts?: XOR<PostsScalarRelationFilter, postsWhereInput>
  }, "post_id_category_id">

  export type post_categoriesOrderByWithAggregationInput = {
    post_id?: SortOrder
    category_id?: SortOrder
    _count?: post_categoriesCountOrderByAggregateInput
    _avg?: post_categoriesAvgOrderByAggregateInput
    _max?: post_categoriesMaxOrderByAggregateInput
    _min?: post_categoriesMinOrderByAggregateInput
    _sum?: post_categoriesSumOrderByAggregateInput
  }

  export type post_categoriesScalarWhereWithAggregatesInput = {
    AND?: post_categoriesScalarWhereWithAggregatesInput | post_categoriesScalarWhereWithAggregatesInput[]
    OR?: post_categoriesScalarWhereWithAggregatesInput[]
    NOT?: post_categoriesScalarWhereWithAggregatesInput | post_categoriesScalarWhereWithAggregatesInput[]
    post_id?: IntWithAggregatesFilter<"post_categories"> | number
    category_id?: IntWithAggregatesFilter<"post_categories"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    comments?: CommentsListRelationFilter
    follows_follows_follower_idTousers?: FollowsListRelationFilter
    follows_follows_following_idTousers?: FollowsListRelationFilter
    likes?: LikesListRelationFilter
    notifications_notifications_actor_idTousers?: NotificationsListRelationFilter
    notifications_notifications_user_idTousers?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
    time_capsules?: Time_capsulesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    password?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
    follows_follows_follower_idTousers?: followsOrderByRelationAggregateInput
    follows_follows_following_idTousers?: followsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    notifications_notifications_actor_idTousers?: notificationsOrderByRelationAggregateInput
    notifications_notifications_user_idTousers?: notificationsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    time_capsules?: time_capsulesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    comments?: CommentsListRelationFilter
    follows_follows_follower_idTousers?: FollowsListRelationFilter
    follows_follows_following_idTousers?: FollowsListRelationFilter
    likes?: LikesListRelationFilter
    notifications_notifications_actor_idTousers?: NotificationsListRelationFilter
    notifications_notifications_user_idTousers?: NotificationsListRelationFilter
    posts?: PostsListRelationFilter
    time_capsules?: Time_capsulesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrderInput | SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type notificationsWhereInput = {
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    actor_id?: IntNullableFilter<"notifications"> | number | null
    type?: Enumnotification_typeFilter<"notifications"> | $Enums.notification_type
    title?: StringNullableFilter<"notifications"> | string | null
    message?: StringNullableFilter<"notifications"> | string | null
    entity_id?: IntNullableFilter<"notifications"> | number | null
    entity_type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users_notifications_actor_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_notifications_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type notificationsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    entity_id?: SortOrderInput | SortOrder
    entity_type?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users_notifications_actor_idTousers?: usersOrderByWithRelationInput
    users_notifications_user_idTousers?: usersOrderByWithRelationInput
  }

  export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: notificationsWhereInput | notificationsWhereInput[]
    OR?: notificationsWhereInput[]
    NOT?: notificationsWhereInput | notificationsWhereInput[]
    user_id?: IntFilter<"notifications"> | number
    actor_id?: IntNullableFilter<"notifications"> | number | null
    type?: Enumnotification_typeFilter<"notifications"> | $Enums.notification_type
    title?: StringNullableFilter<"notifications"> | string | null
    message?: StringNullableFilter<"notifications"> | string | null
    entity_id?: IntNullableFilter<"notifications"> | number | null
    entity_type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
    users_notifications_actor_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_notifications_user_idTousers?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type notificationsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrderInput | SortOrder
    type?: SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    entity_id?: SortOrderInput | SortOrder
    entity_type?: SortOrderInput | SortOrder
    is_read?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: notificationsCountOrderByAggregateInput
    _avg?: notificationsAvgOrderByAggregateInput
    _max?: notificationsMaxOrderByAggregateInput
    _min?: notificationsMinOrderByAggregateInput
    _sum?: notificationsSumOrderByAggregateInput
  }

  export type notificationsScalarWhereWithAggregatesInput = {
    AND?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    OR?: notificationsScalarWhereWithAggregatesInput[]
    NOT?: notificationsScalarWhereWithAggregatesInput | notificationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"notifications"> | number
    user_id?: IntWithAggregatesFilter<"notifications"> | number
    actor_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    type?: Enumnotification_typeWithAggregatesFilter<"notifications"> | $Enums.notification_type
    title?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    message?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    entity_id?: IntNullableWithAggregatesFilter<"notifications"> | number | null
    entity_type?: StringNullableWithAggregatesFilter<"notifications"> | string | null
    is_read?: BoolNullableWithAggregatesFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null
  }

  export type time_capsulesWhereInput = {
    AND?: time_capsulesWhereInput | time_capsulesWhereInput[]
    OR?: time_capsulesWhereInput[]
    NOT?: time_capsulesWhereInput | time_capsulesWhereInput[]
    id?: IntFilter<"time_capsules"> | number
    user_id?: IntFilter<"time_capsules"> | number
    title?: StringNullableFilter<"time_capsules"> | string | null
    content?: StringFilter<"time_capsules"> | string
    media_url?: StringNullableFilter<"time_capsules"> | string | null
    created_at?: DateTimeNullableFilter<"time_capsules"> | Date | string | null
    unlock_at?: DateTimeFilter<"time_capsules"> | Date | string
    is_unlocked?: BoolNullableFilter<"time_capsules"> | boolean | null
    is_public?: BoolNullableFilter<"time_capsules"> | boolean | null
    allow_comments?: BoolNullableFilter<"time_capsules"> | boolean | null
    mood?: StringNullableFilter<"time_capsules"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type time_capsulesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    media_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    unlock_at?: SortOrder
    is_unlocked?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    allow_comments?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type time_capsulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: time_capsulesWhereInput | time_capsulesWhereInput[]
    OR?: time_capsulesWhereInput[]
    NOT?: time_capsulesWhereInput | time_capsulesWhereInput[]
    user_id?: IntFilter<"time_capsules"> | number
    title?: StringNullableFilter<"time_capsules"> | string | null
    content?: StringFilter<"time_capsules"> | string
    media_url?: StringNullableFilter<"time_capsules"> | string | null
    created_at?: DateTimeNullableFilter<"time_capsules"> | Date | string | null
    unlock_at?: DateTimeFilter<"time_capsules"> | Date | string
    is_unlocked?: BoolNullableFilter<"time_capsules"> | boolean | null
    is_public?: BoolNullableFilter<"time_capsules"> | boolean | null
    allow_comments?: BoolNullableFilter<"time_capsules"> | boolean | null
    mood?: StringNullableFilter<"time_capsules"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type time_capsulesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrder
    media_url?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    unlock_at?: SortOrder
    is_unlocked?: SortOrderInput | SortOrder
    is_public?: SortOrderInput | SortOrder
    allow_comments?: SortOrderInput | SortOrder
    mood?: SortOrderInput | SortOrder
    _count?: time_capsulesCountOrderByAggregateInput
    _avg?: time_capsulesAvgOrderByAggregateInput
    _max?: time_capsulesMaxOrderByAggregateInput
    _min?: time_capsulesMinOrderByAggregateInput
    _sum?: time_capsulesSumOrderByAggregateInput
  }

  export type time_capsulesScalarWhereWithAggregatesInput = {
    AND?: time_capsulesScalarWhereWithAggregatesInput | time_capsulesScalarWhereWithAggregatesInput[]
    OR?: time_capsulesScalarWhereWithAggregatesInput[]
    NOT?: time_capsulesScalarWhereWithAggregatesInput | time_capsulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"time_capsules"> | number
    user_id?: IntWithAggregatesFilter<"time_capsules"> | number
    title?: StringNullableWithAggregatesFilter<"time_capsules"> | string | null
    content?: StringWithAggregatesFilter<"time_capsules"> | string
    media_url?: StringNullableWithAggregatesFilter<"time_capsules"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"time_capsules"> | Date | string | null
    unlock_at?: DateTimeWithAggregatesFilter<"time_capsules"> | Date | string
    is_unlocked?: BoolNullableWithAggregatesFilter<"time_capsules"> | boolean | null
    is_public?: BoolNullableWithAggregatesFilter<"time_capsules"> | boolean | null
    allow_comments?: BoolNullableWithAggregatesFilter<"time_capsules"> | boolean | null
    mood?: StringNullableWithAggregatesFilter<"time_capsules"> | string | null
  }

  export type commentsCreateInput = {
    content: string
    create_at?: Date | string | null
    posts?: postsCreateNestedOneWithoutCommentsInput
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    id?: number
    post_id?: number | null
    user_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type commentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneWithoutCommentsNestedInput
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    id?: number
    post_id?: number | null
    user_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsCreateInput = {
    create_at?: Date | string | null
    users_follows_follower_idTousers?: usersCreateNestedOneWithoutFollows_follows_follower_idTousersInput
    users_follows_following_idTousers?: usersCreateNestedOneWithoutFollows_follows_following_idTousersInput
  }

  export type followsUncheckedCreateInput = {
    id?: number
    follower_id?: number | null
    following_id?: number | null
    create_at?: Date | string | null
  }

  export type followsUpdateInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_follower_idTousers?: usersUpdateOneWithoutFollows_follows_follower_idTousersNestedInput
    users_follows_following_idTousers?: usersUpdateOneWithoutFollows_follows_following_idTousersNestedInput
  }

  export type followsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: NullableIntFieldUpdateOperationsInput | number | null
    following_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsCreateManyInput = {
    id?: number
    follower_id?: number | null
    following_id?: number | null
    create_at?: Date | string | null
  }

  export type followsUpdateManyMutationInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: NullableIntFieldUpdateOperationsInput | number | null
    following_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateInput = {
    create_at?: Date | string | null
    posts?: postsCreateNestedOneWithoutLikesInput
    users?: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    post_id?: number | null
    create_at?: Date | string | null
  }

  export type likesUpdateInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneWithoutLikesNestedInput
    users?: usersUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesCreateManyInput = {
    id?: number
    user_id?: number | null
    post_id?: number | null
    create_at?: Date | string | null
  }

  export type likesUpdateManyMutationInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateInput = {
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesCreateNestedManyWithoutPostsInput
    users?: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsCreateManyInput = {
    id?: number
    user_id?: number | null
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    slug: string
    created_at?: Date | string | null
    post_categories?: post_categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string | null
    post_categories?: post_categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_categories?: post_categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_categories?: post_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_categoriesCreateInput = {
    categories: categoriesCreateNestedOneWithoutPost_categoriesInput
    posts: postsCreateNestedOneWithoutPost_categoriesInput
  }

  export type post_categoriesUncheckedCreateInput = {
    post_id: number
    category_id: number
  }

  export type post_categoriesUpdateInput = {
    categories?: categoriesUpdateOneRequiredWithoutPost_categoriesNestedInput
    posts?: postsUpdateOneRequiredWithoutPost_categoriesNestedInput
  }

  export type post_categoriesUncheckedUpdateInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_categoriesCreateManyInput = {
    post_id: number
    category_id: number
  }

  export type post_categoriesUpdateManyMutationInput = {

  }

  export type post_categoriesUncheckedUpdateManyInput = {
    post_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type notificationsCreateInput = {
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
    users_notifications_actor_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_actor_idTousersInput
    users_notifications_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_user_idTousersInput
  }

  export type notificationsUncheckedCreateInput = {
    id?: number
    user_id: number
    actor_id?: number | null
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_actor_idTousers?: usersUpdateOneWithoutNotifications_notifications_actor_idTousersNestedInput
    users_notifications_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsCreateManyInput = {
    id?: number
    user_id: number
    actor_id?: number | null
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsUpdateManyMutationInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type time_capsulesCreateInput = {
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
    users: usersCreateNestedOneWithoutTime_capsulesInput
  }

  export type time_capsulesUncheckedCreateInput = {
    id?: number
    user_id: number
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
  }

  export type time_capsulesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutTime_capsulesNestedInput
  }

  export type time_capsulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_capsulesCreateManyInput = {
    id?: number
    user_id: number
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
  }

  export type time_capsulesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_capsulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PostsNullableScalarRelationFilter = {
    is?: postsWhereInput | null
    isNot?: postsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commentsCountOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    create_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    create_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
    content?: SortOrder
    create_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type followsFollower_idFollowing_idCompoundUniqueInput = {
    follower_id: number
    following_id: number
  }

  export type followsCountOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    create_at?: SortOrder
  }

  export type followsAvgOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
  }

  export type followsMaxOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    create_at?: SortOrder
  }

  export type followsMinOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
    create_at?: SortOrder
  }

  export type followsSumOrderByAggregateInput = {
    id?: SortOrder
    follower_id?: SortOrder
    following_id?: SortOrder
  }

  export type likesUser_idPost_idCompoundUniqueInput = {
    user_id: number
    post_id: number
  }

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    create_at?: SortOrder
  }

  export type likesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    create_at?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    create_at?: SortOrder
  }

  export type likesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type Post_categoriesListRelationFilter = {
    every?: post_categoriesWhereInput
    some?: post_categoriesWhereInput
    none?: post_categoriesWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type post_categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    created_at?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type post_categoriesPost_idCategory_idCompoundUniqueInput = {
    post_id: number
    category_id: number
  }

  export type post_categoriesCountOrderByAggregateInput = {
    post_id?: SortOrder
    category_id?: SortOrder
  }

  export type post_categoriesAvgOrderByAggregateInput = {
    post_id?: SortOrder
    category_id?: SortOrder
  }

  export type post_categoriesMaxOrderByAggregateInput = {
    post_id?: SortOrder
    category_id?: SortOrder
  }

  export type post_categoriesMinOrderByAggregateInput = {
    post_id?: SortOrder
    category_id?: SortOrder
  }

  export type post_categoriesSumOrderByAggregateInput = {
    post_id?: SortOrder
    category_id?: SortOrder
  }

  export type FollowsListRelationFilter = {
    every?: followsWhereInput
    some?: followsWhereInput
    none?: followsWhereInput
  }

  export type NotificationsListRelationFilter = {
    every?: notificationsWhereInput
    some?: notificationsWhereInput
    none?: notificationsWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type Time_capsulesListRelationFilter = {
    every?: time_capsulesWhereInput
    some?: time_capsulesWhereInput
    none?: time_capsulesWhereInput
  }

  export type followsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type time_capsulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type notificationsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    entity_id?: SortOrder
    entity_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrder
    entity_id?: SortOrder
  }

  export type notificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    entity_id?: SortOrder
    entity_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    entity_id?: SortOrder
    entity_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type notificationsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    actor_id?: SortOrder
    entity_id?: SortOrder
  }

  export type Enumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type time_capsulesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media_url?: SortOrder
    created_at?: SortOrder
    unlock_at?: SortOrder
    is_unlocked?: SortOrder
    is_public?: SortOrder
    allow_comments?: SortOrder
    mood?: SortOrder
  }

  export type time_capsulesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type time_capsulesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media_url?: SortOrder
    created_at?: SortOrder
    unlock_at?: SortOrder
    is_unlocked?: SortOrder
    is_public?: SortOrder
    allow_comments?: SortOrder
    mood?: SortOrder
  }

  export type time_capsulesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media_url?: SortOrder
    created_at?: SortOrder
    unlock_at?: SortOrder
    is_unlocked?: SortOrder
    is_public?: SortOrder
    allow_comments?: SortOrder
    mood?: SortOrder
  }

  export type time_capsulesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type postsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type postsUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutCommentsInput
    upsert?: postsUpsertWithoutCommentsInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutCommentsInput, postsUpdateWithoutCommentsInput>, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCommentsInput
    upsert?: usersUpsertWithoutCommentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCommentsInput, usersUpdateWithoutCommentsInput>, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutFollows_follows_follower_idTousersInput = {
    create?: XOR<usersCreateWithoutFollows_follows_follower_idTousersInput, usersUncheckedCreateWithoutFollows_follows_follower_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollows_follows_follower_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFollows_follows_following_idTousersInput = {
    create?: XOR<usersCreateWithoutFollows_follows_following_idTousersInput, usersUncheckedCreateWithoutFollows_follows_following_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollows_follows_following_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutFollows_follows_follower_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFollows_follows_follower_idTousersInput, usersUncheckedCreateWithoutFollows_follows_follower_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollows_follows_follower_idTousersInput
    upsert?: usersUpsertWithoutFollows_follows_follower_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFollows_follows_follower_idTousersInput, usersUpdateWithoutFollows_follows_follower_idTousersInput>, usersUncheckedUpdateWithoutFollows_follows_follower_idTousersInput>
  }

  export type usersUpdateOneWithoutFollows_follows_following_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutFollows_follows_following_idTousersInput, usersUncheckedCreateWithoutFollows_follows_following_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutFollows_follows_following_idTousersInput
    upsert?: usersUpsertWithoutFollows_follows_following_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFollows_follows_following_idTousersInput, usersUpdateWithoutFollows_follows_following_idTousersInput>, usersUncheckedUpdateWithoutFollows_follows_following_idTousersInput>
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type postsUpdateOneWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateOneWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type commentsCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutPostsInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_categoriesCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput> | post_categoriesCreateWithoutPostsInput[] | post_categoriesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput | post_categoriesCreateOrConnectWithoutPostsInput[]
    createMany?: post_categoriesCreateManyPostsInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_categoriesUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput> | post_categoriesCreateWithoutPostsInput[] | post_categoriesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput | post_categoriesCreateOrConnectWithoutPostsInput[]
    createMany?: post_categoriesCreateManyPostsInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type commentsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutPostsNestedInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostsInput | likesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostsInput | likesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostsInput | likesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_categoriesUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput> | post_categoriesCreateWithoutPostsInput[] | post_categoriesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput | post_categoriesCreateOrConnectWithoutPostsInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutPostsInput | post_categoriesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_categoriesCreateManyPostsInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutPostsInput | post_categoriesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutPostsInput | post_categoriesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput> | commentsCreateWithoutPostsInput[] | commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutPostsInput | commentsCreateOrConnectWithoutPostsInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutPostsInput | commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: commentsCreateManyPostsInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutPostsInput | commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutPostsInput | commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostsInput | likesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostsInput | likesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostsInput | likesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_categoriesUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput> | post_categoriesCreateWithoutPostsInput[] | post_categoriesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutPostsInput | post_categoriesCreateOrConnectWithoutPostsInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutPostsInput | post_categoriesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_categoriesCreateManyPostsInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutPostsInput | post_categoriesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutPostsInput | post_categoriesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type post_categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput> | post_categoriesCreateWithoutCategoriesInput[] | post_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutCategoriesInput | post_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: post_categoriesCreateManyCategoriesInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type post_categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput> | post_categoriesCreateWithoutCategoriesInput[] | post_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutCategoriesInput | post_categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: post_categoriesCreateManyCategoriesInputEnvelope
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
  }

  export type post_categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput> | post_categoriesCreateWithoutCategoriesInput[] | post_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutCategoriesInput | post_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | post_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: post_categoriesCreateManyCategoriesInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | post_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutCategoriesInput | post_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type post_categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput> | post_categoriesCreateWithoutCategoriesInput[] | post_categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: post_categoriesCreateOrConnectWithoutCategoriesInput | post_categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: post_categoriesUpsertWithWhereUniqueWithoutCategoriesInput | post_categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: post_categoriesCreateManyCategoriesInputEnvelope
    set?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    disconnect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    delete?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    connect?: post_categoriesWhereUniqueInput | post_categoriesWhereUniqueInput[]
    update?: post_categoriesUpdateWithWhereUniqueWithoutCategoriesInput | post_categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: post_categoriesUpdateManyWithWhereWithoutCategoriesInput | post_categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutPost_categoriesInput = {
    create?: XOR<categoriesCreateWithoutPost_categoriesInput, categoriesUncheckedCreateWithoutPost_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPost_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutPost_categoriesInput = {
    create?: XOR<postsCreateWithoutPost_categoriesInput, postsUncheckedCreateWithoutPost_categoriesInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoriesInput
    connect?: postsWhereUniqueInput
  }

  export type categoriesUpdateOneRequiredWithoutPost_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutPost_categoriesInput, categoriesUncheckedCreateWithoutPost_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutPost_categoriesInput
    upsert?: categoriesUpsertWithoutPost_categoriesInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutPost_categoriesInput, categoriesUpdateWithoutPost_categoriesInput>, categoriesUncheckedUpdateWithoutPost_categoriesInput>
  }

  export type postsUpdateOneRequiredWithoutPost_categoriesNestedInput = {
    create?: XOR<postsCreateWithoutPost_categoriesInput, postsUncheckedCreateWithoutPost_categoriesInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_categoriesInput
    upsert?: postsUpsertWithoutPost_categoriesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutPost_categoriesInput, postsUpdateWithoutPost_categoriesInput>, postsUncheckedUpdateWithoutPost_categoriesInput>
  }

  export type commentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput = {
    create?: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput> | followsCreateWithoutUsers_follows_follower_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput | followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_follower_idTousersInputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type followsCreateNestedManyWithoutUsers_follows_following_idTousersInput = {
    create?: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput> | followsCreateWithoutUsers_follows_following_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_following_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_following_idTousersInput | followsCreateOrConnectWithoutUsers_follows_following_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_following_idTousersInputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput> | notificationsCreateWithoutUsers_notifications_actor_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_actor_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type time_capsulesCreateNestedManyWithoutUsersInput = {
    create?: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput> | time_capsulesCreateWithoutUsersInput[] | time_capsulesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: time_capsulesCreateOrConnectWithoutUsersInput | time_capsulesCreateOrConnectWithoutUsersInput[]
    createMany?: time_capsulesCreateManyUsersInputEnvelope
    connect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
  }

  export type commentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
  }

  export type followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput = {
    create?: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput> | followsCreateWithoutUsers_follows_follower_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput | followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_follower_idTousersInputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput = {
    create?: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput> | followsCreateWithoutUsers_follows_following_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_following_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_following_idTousersInput | followsCreateOrConnectWithoutUsers_follows_following_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_following_idTousersInputEnvelope
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput> | notificationsCreateWithoutUsers_notifications_actor_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_actor_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_user_idTousersInputEnvelope
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type time_capsulesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput> | time_capsulesCreateWithoutUsersInput[] | time_capsulesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: time_capsulesCreateOrConnectWithoutUsersInput | time_capsulesCreateOrConnectWithoutUsersInput[]
    createMany?: time_capsulesCreateManyUsersInputEnvelope
    connect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
  }

  export type commentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput = {
    create?: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput> | followsCreateWithoutUsers_follows_follower_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput | followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput[]
    upsert?: followsUpsertWithWhereUniqueWithoutUsers_follows_follower_idTousersInput | followsUpsertWithWhereUniqueWithoutUsers_follows_follower_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_follower_idTousersInputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutUsers_follows_follower_idTousersInput | followsUpdateWithWhereUniqueWithoutUsers_follows_follower_idTousersInput[]
    updateMany?: followsUpdateManyWithWhereWithoutUsers_follows_follower_idTousersInput | followsUpdateManyWithWhereWithoutUsers_follows_follower_idTousersInput[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput = {
    create?: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput> | followsCreateWithoutUsers_follows_following_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_following_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_following_idTousersInput | followsCreateOrConnectWithoutUsers_follows_following_idTousersInput[]
    upsert?: followsUpsertWithWhereUniqueWithoutUsers_follows_following_idTousersInput | followsUpsertWithWhereUniqueWithoutUsers_follows_following_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_following_idTousersInputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutUsers_follows_following_idTousersInput | followsUpdateWithWhereUniqueWithoutUsers_follows_following_idTousersInput[]
    updateMany?: followsUpdateManyWithWhereWithoutUsers_follows_following_idTousersInput | followsUpdateManyWithWhereWithoutUsers_follows_following_idTousersInput[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput> | notificationsCreateWithoutUsers_notifications_actor_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_actor_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_actor_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_actor_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type time_capsulesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput> | time_capsulesCreateWithoutUsersInput[] | time_capsulesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: time_capsulesCreateOrConnectWithoutUsersInput | time_capsulesCreateOrConnectWithoutUsersInput[]
    upsert?: time_capsulesUpsertWithWhereUniqueWithoutUsersInput | time_capsulesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: time_capsulesCreateManyUsersInputEnvelope
    set?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    disconnect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    delete?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    connect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    update?: time_capsulesUpdateWithWhereUniqueWithoutUsersInput | time_capsulesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: time_capsulesUpdateManyWithWhereWithoutUsersInput | time_capsulesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: time_capsulesScalarWhereInput | time_capsulesScalarWhereInput[]
  }

  export type commentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput> | commentsCreateWithoutUsersInput[] | commentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: commentsCreateOrConnectWithoutUsersInput | commentsCreateOrConnectWithoutUsersInput[]
    upsert?: commentsUpsertWithWhereUniqueWithoutUsersInput | commentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: commentsCreateManyUsersInputEnvelope
    set?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    disconnect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    delete?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    connect?: commentsWhereUniqueInput | commentsWhereUniqueInput[]
    update?: commentsUpdateWithWhereUniqueWithoutUsersInput | commentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: commentsUpdateManyWithWhereWithoutUsersInput | commentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: commentsScalarWhereInput | commentsScalarWhereInput[]
  }

  export type followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput = {
    create?: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput> | followsCreateWithoutUsers_follows_follower_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput | followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput[]
    upsert?: followsUpsertWithWhereUniqueWithoutUsers_follows_follower_idTousersInput | followsUpsertWithWhereUniqueWithoutUsers_follows_follower_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_follower_idTousersInputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutUsers_follows_follower_idTousersInput | followsUpdateWithWhereUniqueWithoutUsers_follows_follower_idTousersInput[]
    updateMany?: followsUpdateManyWithWhereWithoutUsers_follows_follower_idTousersInput | followsUpdateManyWithWhereWithoutUsers_follows_follower_idTousersInput[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput = {
    create?: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput> | followsCreateWithoutUsers_follows_following_idTousersInput[] | followsUncheckedCreateWithoutUsers_follows_following_idTousersInput[]
    connectOrCreate?: followsCreateOrConnectWithoutUsers_follows_following_idTousersInput | followsCreateOrConnectWithoutUsers_follows_following_idTousersInput[]
    upsert?: followsUpsertWithWhereUniqueWithoutUsers_follows_following_idTousersInput | followsUpsertWithWhereUniqueWithoutUsers_follows_following_idTousersInput[]
    createMany?: followsCreateManyUsers_follows_following_idTousersInputEnvelope
    set?: followsWhereUniqueInput | followsWhereUniqueInput[]
    disconnect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    delete?: followsWhereUniqueInput | followsWhereUniqueInput[]
    connect?: followsWhereUniqueInput | followsWhereUniqueInput[]
    update?: followsUpdateWithWhereUniqueWithoutUsers_follows_following_idTousersInput | followsUpdateWithWhereUniqueWithoutUsers_follows_following_idTousersInput[]
    updateMany?: followsUpdateManyWithWhereWithoutUsers_follows_following_idTousersInput | followsUpdateManyWithWhereWithoutUsers_follows_following_idTousersInput[]
    deleteMany?: followsScalarWhereInput | followsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput> | notificationsCreateWithoutUsers_notifications_actor_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_actor_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_actor_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_actor_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput = {
    create?: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput> | notificationsCreateWithoutUsers_notifications_user_idTousersInput[] | notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput[]
    connectOrCreate?: notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput | notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput[]
    upsert?: notificationsUpsertWithWhereUniqueWithoutUsers_notifications_user_idTousersInput | notificationsUpsertWithWhereUniqueWithoutUsers_notifications_user_idTousersInput[]
    createMany?: notificationsCreateManyUsers_notifications_user_idTousersInputEnvelope
    set?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    disconnect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    delete?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    connect?: notificationsWhereUniqueInput | notificationsWhereUniqueInput[]
    update?: notificationsUpdateWithWhereUniqueWithoutUsers_notifications_user_idTousersInput | notificationsUpdateWithWhereUniqueWithoutUsers_notifications_user_idTousersInput[]
    updateMany?: notificationsUpdateManyWithWhereWithoutUsers_notifications_user_idTousersInput | notificationsUpdateManyWithWhereWithoutUsers_notifications_user_idTousersInput[]
    deleteMany?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type time_capsulesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput> | time_capsulesCreateWithoutUsersInput[] | time_capsulesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: time_capsulesCreateOrConnectWithoutUsersInput | time_capsulesCreateOrConnectWithoutUsersInput[]
    upsert?: time_capsulesUpsertWithWhereUniqueWithoutUsersInput | time_capsulesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: time_capsulesCreateManyUsersInputEnvelope
    set?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    disconnect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    delete?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    connect?: time_capsulesWhereUniqueInput | time_capsulesWhereUniqueInput[]
    update?: time_capsulesUpdateWithWhereUniqueWithoutUsersInput | time_capsulesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: time_capsulesUpdateManyWithWhereWithoutUsersInput | time_capsulesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: time_capsulesScalarWhereInput | time_capsulesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_actor_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_actor_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_actor_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutNotifications_notifications_user_idTousersInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_user_idTousersInput
    connect?: usersWhereUniqueInput
  }

  export type Enumnotification_typeFieldUpdateOperationsInput = {
    set?: $Enums.notification_type
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneWithoutNotifications_notifications_actor_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_actor_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_actor_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_actor_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_actor_idTousersInput, usersUpdateWithoutNotifications_notifications_actor_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_actor_idTousersInput>
  }

  export type usersUpdateOneRequiredWithoutNotifications_notifications_user_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_user_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutNotifications_notifications_user_idTousersInput
    upsert?: usersUpsertWithoutNotifications_notifications_user_idTousersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutNotifications_notifications_user_idTousersInput, usersUpdateWithoutNotifications_notifications_user_idTousersInput>, usersUncheckedUpdateWithoutNotifications_notifications_user_idTousersInput>
  }

  export type usersCreateNestedOneWithoutTime_capsulesInput = {
    create?: XOR<usersCreateWithoutTime_capsulesInput, usersUncheckedCreateWithoutTime_capsulesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTime_capsulesInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutTime_capsulesNestedInput = {
    create?: XOR<usersCreateWithoutTime_capsulesInput, usersUncheckedCreateWithoutTime_capsulesInput>
    connectOrCreate?: usersCreateOrConnectWithoutTime_capsulesInput
    upsert?: usersUpsertWithoutTime_capsulesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTime_capsulesInput, usersUpdateWithoutTime_capsulesInput>, usersUncheckedUpdateWithoutTime_capsulesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumnotification_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeFilter<$PrismaModel> | $Enums.notification_type
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.notification_type | Enumnotification_typeFieldRefInput<$PrismaModel>
    in?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.notification_type[] | ListEnumnotification_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumnotification_typeWithAggregatesFilter<$PrismaModel> | $Enums.notification_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnotification_typeFilter<$PrismaModel>
    _max?: NestedEnumnotification_typeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type postsCreateWithoutCommentsInput = {
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    likes?: likesCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesCreateNestedManyWithoutPostsInput
    users?: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutCommentsInput = {
    id?: number
    user_id?: number | null
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutCommentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
  }

  export type usersCreateWithoutCommentsInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCommentsInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCommentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
  }

  export type postsUpsertWithoutCommentsInput = {
    update: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
    create: XOR<postsCreateWithoutCommentsInput, postsUncheckedCreateWithoutCommentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutCommentsInput, postsUncheckedUpdateWithoutCommentsInput>
  }

  export type postsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type usersUpsertWithoutCommentsInput = {
    update: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
    create: XOR<usersCreateWithoutCommentsInput, usersUncheckedCreateWithoutCommentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCommentsInput, usersUncheckedUpdateWithoutCommentsInput>
  }

  export type usersUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutFollows_follows_follower_idTousersInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFollows_follows_follower_idTousersInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFollows_follows_follower_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFollows_follows_follower_idTousersInput, usersUncheckedCreateWithoutFollows_follows_follower_idTousersInput>
  }

  export type usersCreateWithoutFollows_follows_following_idTousersInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutFollows_follows_following_idTousersInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutFollows_follows_following_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFollows_follows_following_idTousersInput, usersUncheckedCreateWithoutFollows_follows_following_idTousersInput>
  }

  export type usersUpsertWithoutFollows_follows_follower_idTousersInput = {
    update: XOR<usersUpdateWithoutFollows_follows_follower_idTousersInput, usersUncheckedUpdateWithoutFollows_follows_follower_idTousersInput>
    create: XOR<usersCreateWithoutFollows_follows_follower_idTousersInput, usersUncheckedCreateWithoutFollows_follows_follower_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFollows_follows_follower_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFollows_follows_follower_idTousersInput, usersUncheckedUpdateWithoutFollows_follows_follower_idTousersInput>
  }

  export type usersUpdateWithoutFollows_follows_follower_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFollows_follows_follower_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutFollows_follows_following_idTousersInput = {
    update: XOR<usersUpdateWithoutFollows_follows_following_idTousersInput, usersUncheckedUpdateWithoutFollows_follows_following_idTousersInput>
    create: XOR<usersCreateWithoutFollows_follows_following_idTousersInput, usersUncheckedCreateWithoutFollows_follows_following_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFollows_follows_following_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFollows_follows_following_idTousersInput, usersUncheckedUpdateWithoutFollows_follows_following_idTousersInput>
  }

  export type usersUpdateWithoutFollows_follows_following_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutFollows_follows_following_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type postsCreateWithoutLikesInput = {
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesCreateNestedManyWithoutPostsInput
    users?: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    id?: number
    user_id?: number | null
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersCreateWithoutLikesInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateWithoutPostsInput = {
    content: string
    create_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutPostsInput = {
    id?: number
    user_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutPostsInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsCreateManyPostsInputEnvelope = {
    data: commentsCreateManyPostsInput | commentsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutPostsInput = {
    create_at?: Date | string | null
    users?: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPostsInput = {
    id?: number
    user_id?: number | null
    create_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutPostsInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput>
  }

  export type likesCreateManyPostsInputEnvelope = {
    data: likesCreateManyPostsInput | likesCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type post_categoriesCreateWithoutPostsInput = {
    categories: categoriesCreateNestedOneWithoutPost_categoriesInput
  }

  export type post_categoriesUncheckedCreateWithoutPostsInput = {
    category_id: number
  }

  export type post_categoriesCreateOrConnectWithoutPostsInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
  }

  export type post_categoriesCreateManyPostsInputEnvelope = {
    data: post_categoriesCreateManyPostsInput | post_categoriesCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPostsInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
    create: XOR<commentsCreateWithoutPostsInput, commentsUncheckedCreateWithoutPostsInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutPostsInput, commentsUncheckedUpdateWithoutPostsInput>
  }

  export type commentsUpdateManyWithWhereWithoutPostsInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutPostsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: commentsScalarWhereInput | commentsScalarWhereInput[]
    OR?: commentsScalarWhereInput[]
    NOT?: commentsScalarWhereInput | commentsScalarWhereInput[]
    id?: IntFilter<"comments"> | number
    post_id?: IntNullableFilter<"comments"> | number | null
    user_id?: IntNullableFilter<"comments"> | number | null
    content?: StringFilter<"comments"> | string
    create_at?: DateTimeNullableFilter<"comments"> | Date | string | null
  }

  export type likesUpsertWithWhereUniqueWithoutPostsInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPostsInput, likesUncheckedUpdateWithoutPostsInput>
    create: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPostsInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPostsInput, likesUncheckedUpdateWithoutPostsInput>
  }

  export type likesUpdateManyWithWhereWithoutPostsInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPostsInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: IntFilter<"likes"> | number
    user_id?: IntNullableFilter<"likes"> | number | null
    post_id?: IntNullableFilter<"likes"> | number | null
    create_at?: DateTimeNullableFilter<"likes"> | Date | string | null
  }

  export type post_categoriesUpsertWithWhereUniqueWithoutPostsInput = {
    where: post_categoriesWhereUniqueInput
    update: XOR<post_categoriesUpdateWithoutPostsInput, post_categoriesUncheckedUpdateWithoutPostsInput>
    create: XOR<post_categoriesCreateWithoutPostsInput, post_categoriesUncheckedCreateWithoutPostsInput>
  }

  export type post_categoriesUpdateWithWhereUniqueWithoutPostsInput = {
    where: post_categoriesWhereUniqueInput
    data: XOR<post_categoriesUpdateWithoutPostsInput, post_categoriesUncheckedUpdateWithoutPostsInput>
  }

  export type post_categoriesUpdateManyWithWhereWithoutPostsInput = {
    where: post_categoriesScalarWhereInput
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyWithoutPostsInput>
  }

  export type post_categoriesScalarWhereInput = {
    AND?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
    OR?: post_categoriesScalarWhereInput[]
    NOT?: post_categoriesScalarWhereInput | post_categoriesScalarWhereInput[]
    post_id?: IntFilter<"post_categories"> | number
    category_id?: IntFilter<"post_categories"> | number
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type post_categoriesCreateWithoutCategoriesInput = {
    posts: postsCreateNestedOneWithoutPost_categoriesInput
  }

  export type post_categoriesUncheckedCreateWithoutCategoriesInput = {
    post_id: number
  }

  export type post_categoriesCreateOrConnectWithoutCategoriesInput = {
    where: post_categoriesWhereUniqueInput
    create: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type post_categoriesCreateManyCategoriesInputEnvelope = {
    data: post_categoriesCreateManyCategoriesInput | post_categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type post_categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: post_categoriesWhereUniqueInput
    update: XOR<post_categoriesUpdateWithoutCategoriesInput, post_categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<post_categoriesCreateWithoutCategoriesInput, post_categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type post_categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: post_categoriesWhereUniqueInput
    data: XOR<post_categoriesUpdateWithoutCategoriesInput, post_categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type post_categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: post_categoriesScalarWhereInput
    data: XOR<post_categoriesUpdateManyMutationInput, post_categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoriesCreateWithoutPost_categoriesInput = {
    name: string
    slug: string
    created_at?: Date | string | null
  }

  export type categoriesUncheckedCreateWithoutPost_categoriesInput = {
    id?: number
    name: string
    slug: string
    created_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutPost_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutPost_categoriesInput, categoriesUncheckedCreateWithoutPost_categoriesInput>
  }

  export type postsCreateWithoutPost_categoriesInput = {
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostsInput
    users?: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutPost_categoriesInput = {
    id?: number
    user_id?: number | null
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutPost_categoriesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_categoriesInput, postsUncheckedCreateWithoutPost_categoriesInput>
  }

  export type categoriesUpsertWithoutPost_categoriesInput = {
    update: XOR<categoriesUpdateWithoutPost_categoriesInput, categoriesUncheckedUpdateWithoutPost_categoriesInput>
    create: XOR<categoriesCreateWithoutPost_categoriesInput, categoriesUncheckedCreateWithoutPost_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutPost_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutPost_categoriesInput, categoriesUncheckedUpdateWithoutPost_categoriesInput>
  }

  export type categoriesUpdateWithoutPost_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateWithoutPost_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpsertWithoutPost_categoriesInput = {
    update: XOR<postsUpdateWithoutPost_categoriesInput, postsUncheckedUpdateWithoutPost_categoriesInput>
    create: XOR<postsCreateWithoutPost_categoriesInput, postsUncheckedCreateWithoutPost_categoriesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutPost_categoriesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutPost_categoriesInput, postsUncheckedUpdateWithoutPost_categoriesInput>
  }

  export type postsUpdateWithoutPost_categoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostsNestedInput
    users?: usersUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type commentsCreateWithoutUsersInput = {
    content: string
    create_at?: Date | string | null
    posts?: postsCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateWithoutUsersInput = {
    id?: number
    post_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutUsersInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsCreateManyUsersInputEnvelope = {
    data: commentsCreateManyUsersInput | commentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type followsCreateWithoutUsers_follows_follower_idTousersInput = {
    create_at?: Date | string | null
    users_follows_following_idTousers?: usersCreateNestedOneWithoutFollows_follows_following_idTousersInput
  }

  export type followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput = {
    id?: number
    following_id?: number | null
    create_at?: Date | string | null
  }

  export type followsCreateOrConnectWithoutUsers_follows_follower_idTousersInput = {
    where: followsWhereUniqueInput
    create: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput>
  }

  export type followsCreateManyUsers_follows_follower_idTousersInputEnvelope = {
    data: followsCreateManyUsers_follows_follower_idTousersInput | followsCreateManyUsers_follows_follower_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type followsCreateWithoutUsers_follows_following_idTousersInput = {
    create_at?: Date | string | null
    users_follows_follower_idTousers?: usersCreateNestedOneWithoutFollows_follows_follower_idTousersInput
  }

  export type followsUncheckedCreateWithoutUsers_follows_following_idTousersInput = {
    id?: number
    follower_id?: number | null
    create_at?: Date | string | null
  }

  export type followsCreateOrConnectWithoutUsers_follows_following_idTousersInput = {
    where: followsWhereUniqueInput
    create: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput>
  }

  export type followsCreateManyUsers_follows_following_idTousersInputEnvelope = {
    data: followsCreateManyUsers_follows_following_idTousersInput | followsCreateManyUsers_follows_following_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutUsersInput = {
    create_at?: Date | string | null
    posts?: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutUsersInput = {
    id?: number
    post_id?: number | null
    create_at?: Date | string | null
  }

  export type likesCreateOrConnectWithoutUsersInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesCreateManyUsersInputEnvelope = {
    data: likesCreateManyUsersInput | likesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_actor_idTousersInput = {
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
    users_notifications_user_idTousers: usersCreateNestedOneWithoutNotifications_notifications_user_idTousersInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput = {
    id?: number
    user_id: number
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_actor_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_actor_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_actor_idTousersInput | notificationsCreateManyUsers_notifications_actor_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type notificationsCreateWithoutUsers_notifications_user_idTousersInput = {
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
    users_notifications_actor_idTousers?: usersCreateNestedOneWithoutNotifications_notifications_actor_idTousersInput
  }

  export type notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput = {
    id?: number
    actor_id?: number | null
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsCreateOrConnectWithoutUsers_notifications_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    create: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput>
  }

  export type notificationsCreateManyUsers_notifications_user_idTousersInputEnvelope = {
    data: notificationsCreateManyUsers_notifications_user_idTousersInput | notificationsCreateManyUsers_notifications_user_idTousersInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsersInput = {
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesCreateNestedManyWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutPostsInput
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_categories?: post_categoriesUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: postsCreateManyUsersInput | postsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type time_capsulesCreateWithoutUsersInput = {
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
  }

  export type time_capsulesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
  }

  export type time_capsulesCreateOrConnectWithoutUsersInput = {
    where: time_capsulesWhereUniqueInput
    create: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput>
  }

  export type time_capsulesCreateManyUsersInputEnvelope = {
    data: time_capsulesCreateManyUsersInput | time_capsulesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
    create: XOR<commentsCreateWithoutUsersInput, commentsUncheckedCreateWithoutUsersInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutUsersInput, commentsUncheckedUpdateWithoutUsersInput>
  }

  export type commentsUpdateManyWithWhereWithoutUsersInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type followsUpsertWithWhereUniqueWithoutUsers_follows_follower_idTousersInput = {
    where: followsWhereUniqueInput
    update: XOR<followsUpdateWithoutUsers_follows_follower_idTousersInput, followsUncheckedUpdateWithoutUsers_follows_follower_idTousersInput>
    create: XOR<followsCreateWithoutUsers_follows_follower_idTousersInput, followsUncheckedCreateWithoutUsers_follows_follower_idTousersInput>
  }

  export type followsUpdateWithWhereUniqueWithoutUsers_follows_follower_idTousersInput = {
    where: followsWhereUniqueInput
    data: XOR<followsUpdateWithoutUsers_follows_follower_idTousersInput, followsUncheckedUpdateWithoutUsers_follows_follower_idTousersInput>
  }

  export type followsUpdateManyWithWhereWithoutUsers_follows_follower_idTousersInput = {
    where: followsScalarWhereInput
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersInput>
  }

  export type followsScalarWhereInput = {
    AND?: followsScalarWhereInput | followsScalarWhereInput[]
    OR?: followsScalarWhereInput[]
    NOT?: followsScalarWhereInput | followsScalarWhereInput[]
    id?: IntFilter<"follows"> | number
    follower_id?: IntNullableFilter<"follows"> | number | null
    following_id?: IntNullableFilter<"follows"> | number | null
    create_at?: DateTimeNullableFilter<"follows"> | Date | string | null
  }

  export type followsUpsertWithWhereUniqueWithoutUsers_follows_following_idTousersInput = {
    where: followsWhereUniqueInput
    update: XOR<followsUpdateWithoutUsers_follows_following_idTousersInput, followsUncheckedUpdateWithoutUsers_follows_following_idTousersInput>
    create: XOR<followsCreateWithoutUsers_follows_following_idTousersInput, followsUncheckedCreateWithoutUsers_follows_following_idTousersInput>
  }

  export type followsUpdateWithWhereUniqueWithoutUsers_follows_following_idTousersInput = {
    where: followsWhereUniqueInput
    data: XOR<followsUpdateWithoutUsers_follows_following_idTousersInput, followsUncheckedUpdateWithoutUsers_follows_following_idTousersInput>
  }

  export type followsUpdateManyWithWhereWithoutUsers_follows_following_idTousersInput = {
    where: followsScalarWhereInput
    data: XOR<followsUpdateManyMutationInput, followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersInput>
  }

  export type likesUpsertWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesUpdateWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
  }

  export type likesUpdateManyWithWhereWithoutUsersInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutUsersInput>
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_actor_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_actor_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_actor_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_actor_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_actor_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_actor_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersInput>
  }

  export type notificationsScalarWhereInput = {
    AND?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    OR?: notificationsScalarWhereInput[]
    NOT?: notificationsScalarWhereInput | notificationsScalarWhereInput[]
    id?: IntFilter<"notifications"> | number
    user_id?: IntFilter<"notifications"> | number
    actor_id?: IntNullableFilter<"notifications"> | number | null
    type?: Enumnotification_typeFilter<"notifications"> | $Enums.notification_type
    title?: StringNullableFilter<"notifications"> | string | null
    message?: StringNullableFilter<"notifications"> | string | null
    entity_id?: IntNullableFilter<"notifications"> | number | null
    entity_type?: StringNullableFilter<"notifications"> | string | null
    is_read?: BoolNullableFilter<"notifications"> | boolean | null
    created_at?: DateTimeNullableFilter<"notifications"> | Date | string | null
  }

  export type notificationsUpsertWithWhereUniqueWithoutUsers_notifications_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    update: XOR<notificationsUpdateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_user_idTousersInput>
    create: XOR<notificationsCreateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedCreateWithoutUsers_notifications_user_idTousersInput>
  }

  export type notificationsUpdateWithWhereUniqueWithoutUsers_notifications_user_idTousersInput = {
    where: notificationsWhereUniqueInput
    data: XOR<notificationsUpdateWithoutUsers_notifications_user_idTousersInput, notificationsUncheckedUpdateWithoutUsers_notifications_user_idTousersInput>
  }

  export type notificationsUpdateManyWithWhereWithoutUsers_notifications_user_idTousersInput = {
    where: notificationsScalarWhereInput
    data: XOR<notificationsUpdateManyMutationInput, notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    user_id?: IntNullableFilter<"posts"> | number | null
    title?: StringFilter<"posts"> | string
    content?: StringFilter<"posts"> | string
    image?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
  }

  export type time_capsulesUpsertWithWhereUniqueWithoutUsersInput = {
    where: time_capsulesWhereUniqueInput
    update: XOR<time_capsulesUpdateWithoutUsersInput, time_capsulesUncheckedUpdateWithoutUsersInput>
    create: XOR<time_capsulesCreateWithoutUsersInput, time_capsulesUncheckedCreateWithoutUsersInput>
  }

  export type time_capsulesUpdateWithWhereUniqueWithoutUsersInput = {
    where: time_capsulesWhereUniqueInput
    data: XOR<time_capsulesUpdateWithoutUsersInput, time_capsulesUncheckedUpdateWithoutUsersInput>
  }

  export type time_capsulesUpdateManyWithWhereWithoutUsersInput = {
    where: time_capsulesScalarWhereInput
    data: XOR<time_capsulesUpdateManyMutationInput, time_capsulesUncheckedUpdateManyWithoutUsersInput>
  }

  export type time_capsulesScalarWhereInput = {
    AND?: time_capsulesScalarWhereInput | time_capsulesScalarWhereInput[]
    OR?: time_capsulesScalarWhereInput[]
    NOT?: time_capsulesScalarWhereInput | time_capsulesScalarWhereInput[]
    id?: IntFilter<"time_capsules"> | number
    user_id?: IntFilter<"time_capsules"> | number
    title?: StringNullableFilter<"time_capsules"> | string | null
    content?: StringFilter<"time_capsules"> | string
    media_url?: StringNullableFilter<"time_capsules"> | string | null
    created_at?: DateTimeNullableFilter<"time_capsules"> | Date | string | null
    unlock_at?: DateTimeFilter<"time_capsules"> | Date | string
    is_unlocked?: BoolNullableFilter<"time_capsules"> | boolean | null
    is_public?: BoolNullableFilter<"time_capsules"> | boolean | null
    allow_comments?: BoolNullableFilter<"time_capsules"> | boolean | null
    mood?: StringNullableFilter<"time_capsules"> | string | null
  }

  export type usersCreateWithoutNotifications_notifications_actor_idTousersInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_actor_idTousersInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_actor_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_actor_idTousersInput>
  }

  export type usersCreateWithoutNotifications_notifications_user_idTousersInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutNotifications_notifications_user_idTousersInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
    time_capsules?: time_capsulesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutNotifications_notifications_user_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_user_idTousersInput>
  }

  export type usersUpsertWithoutNotifications_notifications_actor_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_actor_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_actor_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_actor_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_actor_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_actor_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_actor_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_actor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUpsertWithoutNotifications_notifications_user_idTousersInput = {
    update: XOR<usersUpdateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_user_idTousersInput>
    create: XOR<usersCreateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedCreateWithoutNotifications_notifications_user_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutNotifications_notifications_user_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutNotifications_notifications_user_idTousersInput, usersUncheckedUpdateWithoutNotifications_notifications_user_idTousersInput>
  }

  export type usersUpdateWithoutNotifications_notifications_user_idTousersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutNotifications_notifications_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
    time_capsules?: time_capsulesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutTime_capsulesInput = {
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTime_capsulesInput = {
    id?: number
    username: string
    email: string
    created_at?: Date | string | null
    password?: string
    comments?: commentsUncheckedCreateNestedManyWithoutUsersInput
    follows_follows_follower_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_follower_idTousersInput
    follows_follows_following_idTousers?: followsUncheckedCreateNestedManyWithoutUsers_follows_following_idTousersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_actor_idTousersInput
    notifications_notifications_user_idTousers?: notificationsUncheckedCreateNestedManyWithoutUsers_notifications_user_idTousersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTime_capsulesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTime_capsulesInput, usersUncheckedCreateWithoutTime_capsulesInput>
  }

  export type usersUpsertWithoutTime_capsulesInput = {
    update: XOR<usersUpdateWithoutTime_capsulesInput, usersUncheckedUpdateWithoutTime_capsulesInput>
    create: XOR<usersCreateWithoutTime_capsulesInput, usersUncheckedCreateWithoutTime_capsulesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTime_capsulesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTime_capsulesInput, usersUncheckedUpdateWithoutTime_capsulesInput>
  }

  export type usersUpdateWithoutTime_capsulesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTime_capsulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    comments?: commentsUncheckedUpdateManyWithoutUsersNestedInput
    follows_follows_follower_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersNestedInput
    follows_follows_following_idTousers?: followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    notifications_notifications_actor_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersNestedInput
    notifications_notifications_user_idTousers?: notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type commentsCreateManyPostsInput = {
    id?: number
    user_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type likesCreateManyPostsInput = {
    id?: number
    user_id?: number | null
    create_at?: Date | string | null
  }

  export type post_categoriesCreateManyPostsInput = {
    category_id: number
  }

  export type commentsUpdateWithoutPostsInput = {
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutPostsInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type post_categoriesUpdateWithoutPostsInput = {
    categories?: categoriesUpdateOneRequiredWithoutPost_categoriesNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutPostsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_categoriesUncheckedUpdateManyWithoutPostsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_categoriesCreateManyCategoriesInput = {
    post_id: number
  }

  export type post_categoriesUpdateWithoutCategoriesInput = {
    posts?: postsUpdateOneRequiredWithoutPost_categoriesNestedInput
  }

  export type post_categoriesUncheckedUpdateWithoutCategoriesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type post_categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type commentsCreateManyUsersInput = {
    id?: number
    post_id?: number | null
    content: string
    create_at?: Date | string | null
  }

  export type followsCreateManyUsers_follows_follower_idTousersInput = {
    id?: number
    following_id?: number | null
    create_at?: Date | string | null
  }

  export type followsCreateManyUsers_follows_following_idTousersInput = {
    id?: number
    follower_id?: number | null
    create_at?: Date | string | null
  }

  export type likesCreateManyUsersInput = {
    id?: number
    post_id?: number | null
    create_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_actor_idTousersInput = {
    id?: number
    user_id: number
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type notificationsCreateManyUsers_notifications_user_idTousersInput = {
    id?: number
    actor_id?: number | null
    type: $Enums.notification_type
    title?: string | null
    message?: string | null
    entity_id?: number | null
    entity_type?: string | null
    is_read?: boolean | null
    created_at?: Date | string | null
  }

  export type postsCreateManyUsersInput = {
    id?: number
    title: string
    content: string
    image?: string | null
    created_at?: Date | string | null
  }

  export type time_capsulesCreateManyUsersInput = {
    id?: number
    title?: string | null
    content: string
    media_url?: string | null
    created_at?: Date | string | null
    unlock_at: Date | string
    is_unlocked?: boolean | null
    is_public?: boolean | null
    allow_comments?: boolean | null
    mood?: string | null
  }

  export type commentsUpdateWithoutUsersInput = {
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    content?: StringFieldUpdateOperationsInput | string
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsUpdateWithoutUsers_follows_follower_idTousersInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_following_idTousers?: usersUpdateOneWithoutFollows_follows_following_idTousersNestedInput
  }

  export type followsUncheckedUpdateWithoutUsers_follows_follower_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsUncheckedUpdateManyWithoutUsers_follows_follower_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    following_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsUpdateWithoutUsers_follows_following_idTousersInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_follows_follower_idTousers?: usersUpdateOneWithoutFollows_follows_follower_idTousersNestedInput
  }

  export type followsUncheckedUpdateWithoutUsers_follows_following_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type followsUncheckedUpdateManyWithoutUsers_follows_following_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    follower_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUpdateWithoutUsersInput = {
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: NullableIntFieldUpdateOperationsInput | number | null
    create_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_actor_idTousersInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_user_idTousers?: usersUpdateOneRequiredWithoutNotifications_notifications_user_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_actor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_actor_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUpdateWithoutUsers_notifications_user_idTousersInput = {
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_notifications_actor_idTousers?: usersUpdateOneWithoutNotifications_notifications_actor_idTousersNestedInput
  }

  export type notificationsUncheckedUpdateWithoutUsers_notifications_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type notificationsUncheckedUpdateManyWithoutUsers_notifications_user_idTousersInput = {
    id?: IntFieldUpdateOperationsInput | number
    actor_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: Enumnotification_typeFieldUpdateOperationsInput | $Enums.notification_type
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    entity_id?: NullableIntFieldUpdateOperationsInput | number | null
    entity_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_read?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutPostsNestedInput
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_categories?: post_categoriesUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type time_capsulesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_capsulesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type time_capsulesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unlock_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_unlocked?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_public?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allow_comments?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mood?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}