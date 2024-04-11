import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.seedswap.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.seedswap.finance/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/seedswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.seedswap.finance/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.seedswap.finance/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://seedswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.seedswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.seedswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.seedswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/seedswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.seedswap.finance',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.seedswap.finance/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.seedswap.finance/help/faq#is-seedswap-safe-has-seedswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.seedswap.finance/hiring/become-a-chef',
      },
    ],
  },
]
