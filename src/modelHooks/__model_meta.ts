const metadata = {
  fields: {
    user: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      name: {
        name: 'name',
        type: 'String',
        isOptional: true,
      },
      email: {
        name: 'email',
        type: 'String',
        isOptional: true,
      },
      emailVerified: {
        name: 'emailVerified',
        type: 'DateTime',
        isOptional: true,
      },
      image: {
        name: 'image',
        type: 'String',
        isOptional: true,
      },
      phone: {
        name: 'phone',
        type: 'String',
        isOptional: true,
      },
      role: {
        name: 'role',
        type: 'String',
        isOptional: true,
      },
      accounts: {
        name: 'accounts',
        type: 'Account',
        isDataModel: true,
        isArray: true,
        backLink: 'user',
      },
      sessions: {
        name: 'sessions',
        type: 'Session',
        isDataModel: true,
        isArray: true,
        backLink: 'user',
      },
      password: {
        name: 'password',
        type: 'String',
        isOptional: true,
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      block: {
        name: 'block',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      inviterId: {
        name: 'inviterId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      inviter: {
        name: 'inviter',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'inviter',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'inviterId' },
      },
      invitee: {
        name: 'invitee',
        type: 'User',
        isDataModel: true,
        isArray: true,
        backLink: 'inviter',
      },
      shops: {
        name: 'shops',
        type: 'Shop',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      producs: {
        name: 'producs',
        type: 'Produce',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      produceSpecifications: {
        name: 'produceSpecifications',
        type: 'ProduceSpecification',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      freeExpressFeeRules: {
        name: 'freeExpressFeeRules',
        type: 'FreeExpressFeeRule',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      expressFeeRules: {
        name: 'expressFeeRules',
        type: 'ExpressFeeRule',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      shopMembers: {
        name: 'shopMembers',
        type: 'ShopMember',
        isDataModel: true,
        isArray: true,
        backLink: 'user',
      },
      i18nValues: {
        name: 'i18nValues',
        type: 'I18nValue',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      configValues: {
        name: 'configValues',
        type: 'ConfigValue',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      loginLogs: {
        name: 'loginLogs',
        type: 'LoginLog',
        isDataModel: true,
        isArray: true,
        backLink: 'user',
      },
      balanceLogs: {
        name: 'balanceLogs',
        type: 'BalanceLog',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      creatorBalanceLogs: {
        name: 'creatorBalanceLogs',
        type: 'BalanceLog',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      crawlTasks: {
        name: 'crawlTasks',
        type: 'CrawlTask',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
      videos: {
        name: 'videos',
        type: 'Video',
        isDataModel: true,
        isArray: true,
        backLink: 'creator',
      },
    },
    account: {
      userId: {
        name: 'userId',
        type: 'String',
        isForeignKey: true,
      },
      type: {
        name: 'type',
        type: 'String',
      },
      provider: {
        name: 'provider',
        type: 'String',
        isId: true,
      },
      providerAccountId: {
        name: 'providerAccountId',
        type: 'String',
        isId: true,
      },
      refresh_token: {
        name: 'refresh_token',
        type: 'String',
        isOptional: true,
      },
      access_token: {
        name: 'access_token',
        type: 'String',
        isOptional: true,
      },
      expires_at: {
        name: 'expires_at',
        type: 'Int',
        isOptional: true,
      },
      token_type: {
        name: 'token_type',
        type: 'String',
        isOptional: true,
      },
      scope: {
        name: 'scope',
        type: 'String',
        isOptional: true,
      },
      id_token: {
        name: 'id_token',
        type: 'String',
        isOptional: true,
      },
      session_state: {
        name: 'session_state',
        type: 'String',
        isOptional: true,
      },
      user: {
        name: 'user',
        type: 'User',
        isDataModel: true,
        backLink: 'accounts',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'userId' },
      },
    },
    session: {
      sessionToken: {
        name: 'sessionToken',
        type: 'String',
        isId: true,
      },
      userId: {
        name: 'userId',
        type: 'String',
        isForeignKey: true,
      },
      expires: {
        name: 'expires',
        type: 'DateTime',
      },
      user: {
        name: 'user',
        type: 'User',
        isDataModel: true,
        backLink: 'sessions',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'userId' },
      },
    },
    verificationToken: {
      identifier: {
        name: 'identifier',
        type: 'String',
        isId: true,
      },
      token: {
        name: 'token',
        type: 'String',
        isId: true,
      },
      expires: {
        name: 'expires',
        type: 'DateTime',
      },
    },
    loginLog: {
      day: {
        name: 'day',
        type: 'String',
        isId: true,
      },
      userId: {
        name: 'userId',
        type: 'String',
        isId: true,
        isForeignKey: true,
      },
      startAt: {
        name: 'startAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      endAt: {
        name: 'endAt',
        type: 'DateTime',
      },
      user: {
        name: 'user',
        type: 'User',
        isDataModel: true,
        backLink: 'loginLogs',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'userId' },
      },
    },
    balanceLog: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      balance: {
        name: 'balance',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      change: {
        name: 'change',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      changeBefore: {
        name: 'changeBefore',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      remark: {
        name: 'remark',
        type: 'String',
      },
      log: {
        name: 'log',
        type: 'Json',
        isOptional: true,
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'balanceLogs',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      preBalanceLogId: {
        name: 'preBalanceLogId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      preBalanceLog: {
        name: 'preBalanceLog',
        type: 'BalanceLog',
        isDataModel: true,
        isOptional: true,
        backLink: 'preBalanceLog',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'preBalanceLogId' },
      },
      balanceLogs: {
        name: 'balanceLogs',
        type: 'BalanceLog',
        isDataModel: true,
        isArray: true,
        backLink: 'preBalanceLog',
      },
      userId: {
        name: 'userId',
        type: 'String',
        isForeignKey: true,
      },
      user: {
        name: 'user',
        type: 'User',
        isDataModel: true,
        backLink: 'balanceLogs',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'userId' },
      },
    },
    shop: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'shops',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      name: {
        name: 'name',
        type: 'String',
      },
      logo: {
        name: 'logo',
        type: 'String',
        isOptional: true,
      },
      status: {
        name: 'status',
        type: 'ShowStatus',
        attributes: [{ name: '@default', args: [] }],
      },
      producs: {
        name: 'producs',
        type: 'Produce',
        isDataModel: true,
        isArray: true,
        backLink: 'shop',
      },
      shopMember: {
        name: 'shopMember',
        type: 'ShopMember',
        isDataModel: true,
        isArray: true,
        backLink: 'shop',
      },
    },
    shopMember: {
      role: {
        name: 'role',
        type: 'ShopMemberRole',
      },
      shopId: {
        name: 'shopId',
        type: 'String',
        isId: true,
        isForeignKey: true,
      },
      shop: {
        name: 'shop',
        type: 'Shop',
        isDataModel: true,
        backLink: 'shopMember',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'shopId' },
      },
      userId: {
        name: 'userId',
        type: 'String',
        isId: true,
        isForeignKey: true,
      },
      user: {
        name: 'user',
        type: 'User',
        isDataModel: true,
        backLink: 'shopMembers',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'userId' },
      },
    },
    produceSpecification: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'produceSpecifications',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      name: {
        name: 'name',
        type: 'String',
      },
      values: {
        name: 'values',
        type: 'ProduceSpecificationValue',
        isDataModel: true,
        isArray: true,
        backLink: 'produceSpecification',
      },
      producId: {
        name: 'producId',
        type: 'String',
        isForeignKey: true,
      },
      produc: {
        name: 'produc',
        type: 'Produce',
        isDataModel: true,
        backLink: 'produceSpecification',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'producId' },
      },
    },
    produceSpecificationValue: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      value: {
        name: 'value',
        type: 'String',
      },
      iamge: {
        name: 'iamge',
        type: 'String',
        isOptional: true,
      },
      produceSpecificationId: {
        name: 'produceSpecificationId',
        type: 'String',
        isForeignKey: true,
      },
      produceSpecification: {
        name: 'produceSpecification',
        type: 'ProduceSpecification',
        isDataModel: true,
        backLink: 'values',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'produceSpecificationId' },
      },
      producePrices: {
        name: 'producePrices',
        type: 'ProducePrice',
        isDataModel: true,
        isArray: true,
        backLink: 'produceSpecificationValues',
        isRelationOwner: true,
      },
      produceSpecificationValuePrice: {
        name: 'produceSpecificationValuePrice',
        type: 'ProduceSpecificationValuePrice',
        isDataModel: true,
        isArray: true,
        backLink: 'produceSpecificationValue',
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
    },
    producePrice: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      goods_no: {
        name: 'goods_no',
        type: 'String',
        isOptional: true,
      },
      currency: {
        name: 'currency',
        type: 'CurrencyType',
        attributes: [{ name: '@default', args: [] }],
      },
      price: {
        name: 'price',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      cost: {
        name: 'cost',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      weight: {
        name: 'weight',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      stock: {
        name: 'stock',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      reduceStock: {
        name: 'reduceStock',
        type: 'Int',
      },
      saled: {
        name: 'saled',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      saledAmount: {
        name: 'saledAmount',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      producId: {
        name: 'producId',
        type: 'String',
        isForeignKey: true,
      },
      produc: {
        name: 'produc',
        type: 'Produce',
        isDataModel: true,
        backLink: 'producePrice',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'producId' },
      },
      produceSpecificationValues: {
        name: 'produceSpecificationValues',
        type: 'ProduceSpecificationValue',
        isDataModel: true,
        isArray: true,
        backLink: 'producePrices',
        isRelationOwner: true,
      },
      produceSpecificationValuePrice: {
        name: 'produceSpecificationValuePrice',
        type: 'ProduceSpecificationValuePrice',
        isDataModel: true,
        isArray: true,
        backLink: 'producePrice',
      },
    },
    produceSpecificationValuePrice: {
      producePriceId: {
        name: 'producePriceId',
        type: 'String',
        isId: true,
        isForeignKey: true,
      },
      producePrice: {
        name: 'producePrice',
        type: 'ProducePrice',
        isDataModel: true,
        backLink: 'produceSpecificationValuePrice',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'producePriceId' },
      },
      produceSpecificationValueId: {
        name: 'produceSpecificationValueId',
        type: 'String',
        isId: true,
        isForeignKey: true,
      },
      produceSpecificationValue: {
        name: 'produceSpecificationValue',
        type: 'ProduceSpecificationValue',
        isDataModel: true,
        backLink: 'produceSpecificationValuePrice',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'produceSpecificationValueId' },
      },
    },
    produce: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'producs',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      name: {
        name: 'name',
        type: 'String',
      },
      status: {
        name: 'status',
        type: 'ProduceStatus',
        attributes: [{ name: '@default', args: [] }],
      },
      linePrice: {
        name: 'linePrice',
        type: 'Decimal',
      },
      tags: {
        name: 'tags',
        type: 'String',
        isOptional: true,
      },
      visits: {
        name: 'visits',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      saled: {
        name: 'saled',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      saledAmount: {
        name: 'saledAmount',
        type: 'Decimal',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      isLimitBuy: {
        name: 'isLimitBuy',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      limitBuyType: {
        name: 'limitBuyType',
        type: 'LimitBuyType',
        isOptional: true,
      },
      limitBuyValue: {
        name: 'limitBuyValue',
        type: 'Int',
        isOptional: true,
      },
      minBuyValue: {
        name: 'minBuyValue',
        type: 'Int',
        isOptional: true,
      },
      shopId: {
        name: 'shopId',
        type: 'String',
        isForeignKey: true,
      },
      shop: {
        name: 'shop',
        type: 'Shop',
        isDataModel: true,
        backLink: 'producs',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'shopId' },
      },
      produceSpecification: {
        name: 'produceSpecification',
        type: 'ProduceSpecification',
        isDataModel: true,
        isArray: true,
        backLink: 'produc',
      },
      producePrice: {
        name: 'producePrice',
        type: 'ProducePrice',
        isDataModel: true,
        isArray: true,
        backLink: 'produc',
      },
      type: {
        name: 'type',
        type: 'ProduceType',
        attributes: [{ name: '@default', args: [] }],
      },
      cardProduce: {
        name: 'cardProduce',
        type: 'CardProduce',
        isDataModel: true,
        isOptional: true,
        backLink: 'produce',
      },
      comboProduce: {
        name: 'comboProduce',
        type: 'ComboProduce',
        isDataModel: true,
        isOptional: true,
        backLink: 'produce',
      },
      physicalProduce: {
        name: 'physicalProduce',
        type: 'PhysicalProduce',
        isDataModel: true,
        isOptional: true,
        backLink: 'produce',
      },
    },
    cardProduceAccount: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      value: {
        name: 'value',
        type: 'String',
      },
      status: {
        name: 'status',
        type: 'CardProduceAccountStatus',
        attributes: [{ name: '@default', args: [] }],
      },
      cardProduceId: {
        name: 'cardProduceId',
        type: 'String',
        isForeignKey: true,
      },
      cardProduce: {
        name: 'cardProduce',
        type: 'CardProduce',
        isDataModel: true,
        backLink: 'cardProduceAccounts',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'cardProduceId' },
      },
    },
    cardProduce: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      produceId: {
        name: 'produceId',
        type: 'String',
        isForeignKey: true,
      },
      produce: {
        name: 'produce',
        type: 'Produce',
        isDataModel: true,
        backLink: 'cardProduce',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'produceId' },
      },
      cardProduceAccounts: {
        name: 'cardProduceAccounts',
        type: 'CardProduceAccount',
        isDataModel: true,
        isArray: true,
        backLink: 'cardProduce',
      },
    },
    comboProduce: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      produceId: {
        name: 'produceId',
        type: 'String',
        isForeignKey: true,
      },
      produce: {
        name: 'produce',
        type: 'Produce',
        isDataModel: true,
        backLink: 'comboProduce',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'produceId' },
      },
    },
    freeExpressFeeRule: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'freeExpressFeeRules',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      name: {
        name: 'name',
        type: 'String',
      },
      type: {
        name: 'type',
        type: 'FreeExpressFeeRuleType',
        attributes: [{ name: '@default', args: [] }],
      },
      freeExpressFeeRuleCitys: {
        name: 'freeExpressFeeRuleCitys',
        type: 'FreeExpressFeeRuleCity',
        isDataModel: true,
        isArray: true,
        backLink: 'freeExpressFeeRule',
      },
      physicalProduces: {
        name: 'physicalProduces',
        type: 'PhysicalProduce',
        isDataModel: true,
        isArray: true,
        backLink: 'freeExpressFeeRule',
      },
      isDef: {
        name: 'isDef',
        type: 'Boolean',
      },
    },
    freeExpressFeeRuleCity: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      citys: {
        name: 'citys',
        type: 'String',
      },
      limit: {
        name: 'limit',
        type: 'Int',
      },
      freeExpressFeeRuleId: {
        name: 'freeExpressFeeRuleId',
        type: 'String',
        isForeignKey: true,
      },
      freeExpressFeeRule: {
        name: 'freeExpressFeeRule',
        type: 'FreeExpressFeeRule',
        isDataModel: true,
        backLink: 'freeExpressFeeRuleCitys',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'freeExpressFeeRuleId' },
      },
    },
    expressFeeRule: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'expressFeeRules',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      name: {
        name: 'name',
        type: 'String',
      },
      type: {
        name: 'type',
        type: 'ExpressFeeRuleTyle',
        attributes: [{ name: '@default', args: [] }],
      },
      isDef: {
        name: 'isDef',
        type: 'Boolean',
      },
      expressFeeRuleCitys: {
        name: 'expressFeeRuleCitys',
        type: 'ExpressFeeRuleCity',
        isDataModel: true,
        isArray: true,
        backLink: 'expressFeeRule',
      },
      physicalProduces: {
        name: 'physicalProduces',
        type: 'PhysicalProduce',
        isDataModel: true,
        isArray: true,
        backLink: 'expressFeeRule',
      },
    },
    expressFeeRuleCity: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      citys: {
        name: 'citys',
        type: 'String',
      },
      firstLimit: {
        name: 'firstLimit',
        type: 'Int',
      },
      firstFee: {
        name: 'firstFee',
        type: 'Decimal',
      },
      step: {
        name: 'step',
        type: 'Int',
      },
      stepFee: {
        name: 'stepFee',
        type: 'Decimal',
      },
      expressFeeRuleId: {
        name: 'expressFeeRuleId',
        type: 'String',
        isForeignKey: true,
      },
      expressFeeRule: {
        name: 'expressFeeRule',
        type: 'ExpressFeeRule',
        isDataModel: true,
        backLink: 'expressFeeRuleCitys',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'expressFeeRuleId' },
      },
    },
    physicalProduce: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      produceId: {
        name: 'produceId',
        type: 'String',
        isForeignKey: true,
      },
      produce: {
        name: 'produce',
        type: 'Produce',
        isDataModel: true,
        backLink: 'physicalProduce',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'produceId' },
      },
      expressFee: {
        name: 'expressFee',
        type: 'Decimal',
      },
      isFreeExpressFee: {
        name: 'isFreeExpressFee',
        type: 'Boolean',
      },
      freeExpressFeeRuleId: {
        name: 'freeExpressFeeRuleId',
        type: 'String',
        isForeignKey: true,
      },
      freeExpressFeeRule: {
        name: 'freeExpressFeeRule',
        type: 'FreeExpressFeeRule',
        isDataModel: true,
        backLink: 'physicalProduces',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'freeExpressFeeRuleId' },
      },
      expressFeeRuleId: {
        name: 'expressFeeRuleId',
        type: 'String',
        isForeignKey: true,
      },
      expressFeeRule: {
        name: 'expressFeeRule',
        type: 'ExpressFeeRule',
        isDataModel: true,
        backLink: 'physicalProduces',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'expressFeeRuleId' },
      },
    },
    i18nValue: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'i18nValues',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      key: {
        name: 'key',
        type: 'String',
      },
      value: {
        name: 'value',
        type: 'String',
      },
      lang: {
        name: 'lang',
        type: 'String',
      },
    },
    configValue: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'configValues',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      key: {
        name: 'key',
        type: 'ConfigValueKey',
      },
      value: {
        name: 'value',
        type: 'Json',
      },
    },
    video: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'videos',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      url: {
        name: 'url',
        type: 'String',
      },
      title: {
        name: 'title',
        type: 'String',
      },
      summary: {
        name: 'summary',
        type: 'String',
      },
      coverUrl: {
        name: 'coverUrl',
        type: 'String',
      },
      publishedAt: {
        name: 'publishedAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      videoTypeId: {
        name: 'videoTypeId',
        type: 'String',
        isForeignKey: true,
      },
      videoType: {
        name: 'videoType',
        type: 'VideoType',
        isDataModel: true,
        backLink: 'videos',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'videoTypeId' },
      },
      videoTags: {
        name: 'videoTags',
        type: 'VideoTag',
        isDataModel: true,
        isArray: true,
        backLink: 'videos',
        isRelationOwner: true,
      },
      videoSetId: {
        name: 'videoSetId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      videoSet: {
        name: 'videoSet',
        type: 'VideoSet',
        isDataModel: true,
        isOptional: true,
        backLink: 'videos',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'videoSetId' },
      },
    },
    videoType: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      label: {
        name: 'label',
        type: 'String',
      },
      parentId: {
        name: 'parentId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      parent: {
        name: 'parent',
        type: 'VideoType',
        isDataModel: true,
        isOptional: true,
        backLink: 'parent',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'parentId' },
      },
      children: {
        name: 'children',
        type: 'VideoType',
        isDataModel: true,
        isArray: true,
        backLink: 'parent',
      },
      videos: {
        name: 'videos',
        type: 'Video',
        isDataModel: true,
        isArray: true,
        backLink: 'videoType',
      },
    },
    videoTag: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      label: {
        name: 'label',
        type: 'String',
      },
      videos: {
        name: 'videos',
        type: 'Video',
        isDataModel: true,
        isArray: true,
        backLink: 'videoTags',
        isRelationOwner: true,
      },
    },
    videoSet: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      label: {
        name: 'label',
        type: 'String',
      },
      videos: {
        name: 'videos',
        type: 'Video',
        isDataModel: true,
        isArray: true,
        backLink: 'videoSet',
      },
    },
    site: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      title: {
        name: 'title',
        type: 'String',
        isOptional: true,
      },
      host: {
        name: 'host',
        type: 'String',
      },
      keywords: {
        name: 'keywords',
        type: 'String',
        isOptional: true,
      },
      description: {
        name: 'description',
        type: 'String',
        isOptional: true,
      },
      icon: {
        name: 'icon',
        type: 'String',
        isOptional: true,
      },
      thumbnail: {
        name: 'thumbnail',
        type: 'String',
        isOptional: true,
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      pages: {
        name: 'pages',
        type: 'Page',
        isDataModel: true,
        isArray: true,
        backLink: 'site',
      },
      crawlTasks: {
        name: 'crawlTasks',
        type: 'CrawlTask',
        isDataModel: true,
        isArray: true,
        backLink: 'site',
      },
    },
    page: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      url: {
        name: 'url',
        type: 'String',
      },
      content: {
        name: 'content',
        type: 'String',
        isOptional: true,
      },
      contentSize: {
        name: 'contentSize',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      cleanHtml: {
        name: 'cleanHtml',
        type: 'String',
        isOptional: true,
      },
      cleanHtmlSize: {
        name: 'cleanHtmlSize',
        type: 'Int',
        attributes: [{ name: '@default', args: [{ value: 0 }] }],
      },
      isHost: {
        name: 'isHost',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      status: {
        name: 'status',
        type: 'PageStatus',
        attributes: [{ name: '@default', args: [] }],
      },
      parentId: {
        name: 'parentId',
        type: 'String',
        isOptional: true,
        isForeignKey: true,
      },
      parent: {
        name: 'parent',
        type: 'Page',
        isDataModel: true,
        isOptional: true,
        backLink: 'parent',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'parentId' },
      },
      children: {
        name: 'children',
        type: 'Page',
        isDataModel: true,
        isArray: true,
        backLink: 'parent',
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      siteId: {
        name: 'siteId',
        type: 'String',
        isForeignKey: true,
      },
      site: {
        name: 'site',
        type: 'Site',
        isDataModel: true,
        backLink: 'pages',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'siteId' },
      },
    },
    crawlTask: {
      id: {
        name: 'id',
        type: 'String',
        isId: true,
        attributes: [{ name: '@default', args: [] }],
      },
      createdAt: {
        name: 'createdAt',
        type: 'DateTime',
        attributes: [{ name: '@default', args: [] }],
      },
      updatedAt: {
        name: 'updatedAt',
        type: 'DateTime',
        attributes: [{ name: '@updatedAt', args: [] }],
      },
      deletedAt: {
        name: 'deletedAt',
        type: 'DateTime',
        isOptional: true,
      },
      creator: {
        name: 'creator',
        type: 'User',
        isDataModel: true,
        isOptional: true,
        backLink: 'crawlTasks',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'creatorId' },
      },
      creatorId: {
        name: 'creatorId',
        type: 'String',
        isOptional: true,
      },
      deleted: {
        name: 'deleted',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      published: {
        name: 'published',
        type: 'Boolean',
        attributes: [{ name: '@default', args: [{ value: false }] }],
      },
      siteId: {
        name: 'siteId',
        type: 'String',
        isForeignKey: true,
      },
      site: {
        name: 'site',
        type: 'Site',
        isDataModel: true,
        backLink: 'crawlTasks',
        isRelationOwner: true,
        foreignKeyMapping: { id: 'siteId' },
      },
    },
  },
  uniqueConstraints: {
    user: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      name: {
        name: 'name',
        fields: ['name'],
      },
      email: {
        name: 'email',
        fields: ['email'],
      },
    },
    account: {
      provider_providerAccountId: {
        name: 'provider_providerAccountId',
        fields: ['provider', 'providerAccountId'],
      },
    },
    session: {
      sessionToken: {
        name: 'sessionToken',
        fields: ['sessionToken'],
      },
    },
    verificationToken: {
      identifier_token: {
        name: 'identifier_token',
        fields: ['identifier', 'token'],
      },
      token: {
        name: 'token',
        fields: ['token'],
      },
    },
    loginLog: {
      day_userId: {
        name: 'day_userId',
        fields: ['day', 'userId'],
      },
    },
    balanceLog: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    shop: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    shopMember: {
      shopId_userId: {
        name: 'shopId_userId',
        fields: ['shopId', 'userId'],
      },
    },
    produceSpecification: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    produceSpecificationValue: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    producePrice: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    produceSpecificationValuePrice: {
      producePriceId_produceSpecificationValueId: {
        name: 'producePriceId_produceSpecificationValueId',
        fields: ['producePriceId', 'produceSpecificationValueId'],
      },
    },
    produce: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    cardProduceAccount: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    cardProduce: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      produceId: {
        name: 'produceId',
        fields: ['produceId'],
      },
    },
    comboProduce: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      produceId: {
        name: 'produceId',
        fields: ['produceId'],
      },
    },
    freeExpressFeeRule: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    freeExpressFeeRuleCity: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    expressFeeRule: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    expressFeeRuleCity: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    physicalProduce: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      produceId: {
        name: 'produceId',
        fields: ['produceId'],
      },
    },
    i18nValue: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    configValue: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    video: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    videoType: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    videoTag: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      label: {
        name: 'label',
        fields: ['label'],
      },
    },
    videoSet: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
    site: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      host: {
        name: 'host',
        fields: ['host'],
      },
    },
    page: {
      id: {
        name: 'id',
        fields: ['id'],
      },
      url: {
        name: 'url',
        fields: ['url'],
      },
    },
    crawlTask: {
      id: {
        name: 'id',
        fields: ['id'],
      },
    },
  },
  deleteCascade: {
    user: ['Account', 'Session', 'LoginLog', 'BalanceLog', 'ShopMember'],
    shop: ['ShopMember', 'Produce'],
    produceSpecification: ['ProduceSpecificationValue'],
    produce: ['ProduceSpecification', 'ProducePrice', 'CardProduce', 'ComboProduce', 'PhysicalProduce'],
    cardProduce: ['CardProduceAccount'],
    freeExpressFeeRule: ['FreeExpressFeeRuleCity', 'PhysicalProduce'],
    expressFeeRule: ['ExpressFeeRuleCity', 'PhysicalProduce'],
    videoType: ['Video'],
    site: ['Page', 'CrawlTask'],
  },
  authModel: 'User',
}
export default metadata
