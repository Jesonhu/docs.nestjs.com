import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  isSidebarOpened = true;
  readonly items = [
    {
      title: '介绍',
      isOpened: false,
      path: '/',
    },
    {
      title: '综述',
      isOpened: true,
      children: [
        { title: '起步', path: '/first-steps' },
        { title: '控制器', path: '/controllers' },
        { title: '供应商', path: '/providers' },
        { title: '模块', path: '/modules' },
        { title: '中间件', path: '/middleware' },
        { title: '筛选器', path: '/exception-filters' },
        { title: '管道', path: '/pipes' },
        { title: '守卫', path: '/guards' },
        { title: '拦截器', path: '/interceptors' },
        { title: '自定义修饰符', path: '/custom-decorators' },
      ],
    },
    {
      title: '基本原理',
      isOpened: false,
      children: [
        { title: '自定义供应商', path: '/fundamentals/custom-providers' },
        {
          title: '异步供应商',
          path: '/fundamentals/async-providers',
        },
        {
          title: '依赖计算',
          path: '/fundamentals/circular-dependency',
        },
        {
          title: '作用域注入',
          path: '/fundamentals/injection-scopes',
        },
        {
          title: '生命周期事件',
          path: '/fundamentals/lifecycle-events'
        },
        {
          title: '平台不可知论',
          path: '/fundamentals/platform-agnosticism',
        },
        { title: '测试', path: '/fundamentals/testing' },
      ],
    },
    {
      title: '周边技术',
      isOpened: false,
      children: [
        { title: '权限验证', path: '/techniques/authentication' },
        { title: '数据库', path: '/techniques/database' },
        { title: 'Mongo', path: '/techniques/mongodb' },
        { title: '文件上传', path: '/techniques/file-upload' },
        { title: '验证其', path: '/techniques/validation' },
        { title: '缓存', path: '/techniques/caching' },
        { title: '序列化', path: '/techniques/serialization' },
        { title: '日志', path: '/techniques/logger' },
        { title: '安全标识', path: '/techniques/security' },
        { title: '配置', path: '/techniques/configuration' },
        { title: '压缩', path: '/techniques/compression' },
        { title: 'HTTP module', path: '/techniques/http-module' },
        { title: 'Model-View-Controller', path: '/techniques/mvc' },
        { title: '性能 (Fastify)', path: '/techniques/performance' },
        { title: '热更新 (Webpack)', path: '/techniques/hot-reload' },
      ],
    },
    {
      title: 'GraphQL',
      isOpened: false,
      children: [
        { title: 'Quick start', path: '/graphql/quick-start' },
        { title: 'Resolvers', path: '/graphql/resolvers-map' },
        { title: 'Mutations', path: '/graphql/mutations' },
        { title: 'Subscriptions', path: '/graphql/subscriptions' },
        { title: 'Scalars', path: '/graphql/scalars' },
        {
          title: 'Tooling',
          path: '/graphql/tooling',
        },
        // { title: 'Schema stitching', path: '/graphql/schema-stitching' },
      ],
    },
    {
      title: 'WebSockets',
      isOpened: false,
      children: [
        { title: 'Gateways', path: '/websockets/gateways' },
        { title: 'Exception filters', path: '/websockets/exception-filters' },
        { title: 'Pipes', path: '/websockets/pipes' },
        { title: 'Guards', path: '/websockets/guards' },
        { title: 'Interceptors', path: '/websockets/interceptors' },
        { title: 'Adapters', path: '/websockets/adapter' },
      ],
    },
    {
      title: 'Microservices',
      isOpened: false,
      children: [
        { title: 'Basics', path: '/microservices/basics' },
        { title: 'Redis', path: '/microservices/redis' },
        { title: 'MQTT', path: '/microservices/mqtt' },
        { title: 'NATS', path: '/microservices/nats' },
        { title: 'RabbitMQ', path: '/microservices/rabbitmq' },
        { title: 'gRPC', path: '/microservices/grpc' },
        {
          title: 'Exception filters',
          path: '/microservices/exception-filters',
        },
        { title: 'Pipes', path: '/microservices/pipes' },
        { title: 'Guards', path: '/microservices/guards' },
        { title: 'Interceptors', path: '/microservices/interceptors' },
      ],
    },
    {
      title: '应用上下文',
      isOpened: false,
      path: '/application-context',
    },
    {
      title: '优秀方案',
      isOpened: false,
      children: [
        { title: 'TypeORM', path: '/recipes/sql-typeorm' },
        { title: 'Mongoose', path: '/recipes/mongodb' },
        { title: 'Sequelize', path: '/recipes/sql-sequelize' },
        { title: 'CQRS', path: '/recipes/cqrs' },
        { title: 'OpenAPI (Swagger)', path: '/recipes/swagger' },
        { title: 'Prisma', path: '/recipes/prisma' },
        { title: 'Health checks (Terminus)', path: '/recipes/terminus' },
        { title: 'Documentation', path: '/recipes/documentation' },
      ],
    },
    {
      title: 'CLI',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/cli/overview' },
        { title: 'Usage', path: '/cli/usages' },
      ],
    },
    {
      title: 'FAQ',
      isOpened: false,
      children: [
        { title: 'HTTP adapter', path: '/faq/http-adapter' },
        { title: 'Global path prefix', path: '/faq/global-prefix' },
        { title: 'Hybrid application', path: '/faq/hybrid-application' },
        { title: 'HTTPS & multiple servers', path: '/faq/multiple-servers' },
        {
          title: 'Examples',
          externalUrl: 'https://github.com/nestjs/nest/tree/master/sample',
        },
      ],
    },
    {
      title: 'Migration guide',
      isOpened: false,
      path: '/migration-guide',
    },
    {
      title: 'Discover',
      isOpened: false,
      children: [{ title: 'Who is using Nest?', path: '/discover/companies' }],
    },
    {
      title: 'Support us',
      isOpened: false,
      path: '/support',
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => this.toggleCategory());

    this.toggleCategory();
  }

  toggleCategory() {
    const { firstChild } = this.route.snapshot;
    if (
      (firstChild.url && firstChild.url[1]) ||
      (firstChild.url &&
        firstChild.routeConfig &&
        firstChild.routeConfig.loadChildren)
    ) {
      const { path } = firstChild.url[0];
      const index = this.items.findIndex(
        ({ title }) => title.toLowerCase() === path,
      );
      if (index < 0) {
        return;
      }
      this.items[index].isOpened = true;
      this.items[1].isOpened = false;
    }
  }
}
