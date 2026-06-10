import { FC, memo } from 'react'

import Stack from '@mui/material/Stack'

import ActivityIcon from '@/assets/icons/activity.svg'
import AddCategoryFillIcon from '@/assets/icons/add-category-fill.svg'
import AddCircleIcon from '@/assets/icons/add-circle.svg'
import AddIcon from '@/assets/icons/add.svg'
import AffiliateIcon from '@/assets/icons/affiliate.svg'
import AnonymousIcon from '@/assets/icons/anonymous.svg'
import AwardIcon from '@/assets/icons/award.svg'
import BadmintonIcon from '@/assets/icons/badminton.svg'
import BalanceTwoIcon from '@/assets/icons/balance-two.svg'
import BaseballIcon from '@/assets/icons/baseball.svg'
import BasketBallIcon from '@/assets/icons/basketball.svg'
import BatteryIcon from '@/assets/icons/battery.svg'
import BlackJackIcon from '@/assets/icons/blackjack.svg'
import BlogsIcon from '@/assets/icons/blogs.svg'
import BowlingIcon from '@/assets/icons/bowling.svg'
import BoxingIcon from '@/assets/icons/boxing.svg'
import BrainIcon from '@/assets/icons/brain.svg'
import BtcIcon from '@/assets/icons/btc.svg'
import CalendarIcon from '@/assets/icons/calendar.svg'
import CardFillIcon from '@/assets/icons/card-fill.svg'
import CardIcon from '@/assets/icons/card.svg'
import CasinoIcon from '@/assets/icons/casino.svg'
import ChartIcon from '@/assets/icons/chart.svg'
import CheckIcon from '@/assets/icons/check.svg'
import CherryIcon from '@/assets/icons/cherry.svg'
import CloseSquareIcon from '@/assets/icons/close-square.svg'
import CloseIcon from '@/assets/icons/close.svg'
import ConfettiIcon from '@/assets/icons/confetti.svg'
import CopyIcon from '@/assets/icons/copy.svg'
import DiceIcon from '@/assets/icons/dice.svg'
import Dice2Icon from '@/assets/icons/dice2.svg'
import DocumentAlignRight2Icon from '@/assets/icons/document-align-right-2.svg'
import DocumentAlignIcon from '@/assets/icons/document-align.svg'
import DocumentDownloadIcon from '@/assets/icons/document-download.svg'
import DocumentIcon from '@/assets/icons/document.svg'
import Document2Icon from '@/assets/icons/document2.svg'
import DollarFillIcon from '@/assets/icons/dollar-fill.svg'
import DollarSquareIcon from '@/assets/icons/dollar-square.svg'
import DotIcon from '@/assets/icons/dot.svg'
import DownSquareIcon from '@/assets/icons/down-square.svg'
import DownIcon from '@/assets/icons/down.svg'
import DownloadIcon from '@/assets/icons/download.svg'
import EditFillIcon from '@/assets/icons/edit-fill.svg'
import EditSquareIcon from '@/assets/icons/edit-square.svg'
import EthIcon from '@/assets/icons/eth.svg'
import EyeClosedIcon from '@/assets/icons/eye-closed.svg'
import EyeIcon from '@/assets/icons/eye.svg'
import Eye2Icon from '@/assets/icons/eye2.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import FaqCircleIcon from '@/assets/icons/faq-circle.svg'
import FootballIcon from '@/assets/icons/football.svg'
import ForeignIcon from '@/assets/icons/foreign.svg'
import ForgotPasswordIcon from '@/assets/icons/forgot-password.svg'
import ForumIcon from '@/assets/icons/forum.svg'
import FullIcon from '@/assets/icons/full.svg'
import GamblingFillIcon from '@/assets/icons/gambling-fill.svg'
import GamblingIcon from '@/assets/icons/gambling.svg'
import GamePadIcon from '@/assets/icons/gamepad.svg'
import GiftIcon from '@/assets/icons/gift.svg'
import GoogleIcon from '@/assets/icons/google.svg'
import HeadphoneIcon from '@/assets/icons/headphone.svg'
import HockeyIcon from '@/assets/icons/hockey.svg'
import InformationSquareIcon from '@/assets/icons/information-square.svg'
import InformationIcon from '@/assets/icons/information.svg'
import InternationalIcon from '@/assets/icons/international.svg'
import LeftIcon from '@/assets/icons/left.svg'
import LikeIcon from '@/assets/icons/like.svg'
import LinkIcon from '@/assets/icons/link.svg'
import LiveSupportIcon from '@/assets/icons/live-support.svg'
import LiveIcon from '@/assets/icons/live.svg'
import LobbyIcon from '@/assets/icons/lobby.svg'
import LockIcon from '@/assets/icons/lock.svg'
import LogoutIcon from '@/assets/icons/logout.svg'
import LtcIcon from '@/assets/icons/ltc.svg'
import MenuFillIcon from '@/assets/icons/menu-fill.svg'
import MenuIcon from '@/assets/icons/menu.svg'
import Menu2Icon from '@/assets/icons/menu2.svg'
import MessageIcon from '@/assets/icons/message.svg'
import Message2Icon from '@/assets/icons/message2.svg'
import Message3Icon from '@/assets/icons/message3.svg'
import MoonIcon from '@/assets/icons/moon.svg'
import MoreSquareIcon from '@/assets/icons/more-square.svg'
import MouseIcon from '@/assets/icons/mouse.svg'
import MultiIcon from '@/assets/icons/multi.svg'
import Multi2Icon from '@/assets/icons/multi2.svg'
import NotificationIcon from '@/assets/icons/notification.svg'
import PaperClipIcon from '@/assets/icons/paper-clip.svg'
import PinIcon from '@/assets/icons/pin.svg'
import PlaySquareIcon from '@/assets/icons/play-square.svg'
import PlayIcon from '@/assets/icons/play.svg'
import ProfileAdd1Icon from '@/assets/icons/profile-add1.svg'
import ProfileAdd2Icon from '@/assets/icons/profile-add2.svg'
import ProfileCircleIcon from '@/assets/icons/profile-circle.svg'
import ProfileSquareIcon from '@/assets/icons/profile-square.svg'
import ProfileIcon from '@/assets/icons/profile.svg'
import PromotionIcon from '@/assets/icons/promotion.svg'
import Ps51Icon from '@/assets/icons/ps51.svg'
import RectangleIcon from '@/assets/icons/rectangle.svg'
import RefreshIcon from '@/assets/icons/refresh.svg'
import ReportIcon from '@/assets/icons/report.svg'
import RightIcon from '@/assets/icons/right.svg'
import Right2Icon from '@/assets/icons/right2.svg'
import RocketIcon from '@/assets/icons/rocket.svg'
import ScanIcon from '@/assets/icons/scan.svg'
import SearchIcon from '@/assets/icons/search.svg'
import SecurityFillIcon from '@/assets/icons/security-fill.svg'
import SecurityIcon from '@/assets/icons/security.svg'
import SendIcon from '@/assets/icons/send.svg'
import Send2Icon from '@/assets/icons/send2.svg'
import Send3Icon from '@/assets/icons/send3.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import ShieldTickIcon from '@/assets/icons/shield-tick.svg'
import SingleIcon from '@/assets/icons/single.svg'
import Single2Icon from '@/assets/icons/single2.svg'
import SituationIcon from '@/assets/icons/situation.svg'
import SoccerFillIcon from '@/assets/icons/soccer-fill.svg'
import SoccerIcon from '@/assets/icons/soccer.svg'
import SponsorshipIcon from '@/assets/icons/sponsorship.svg'
import SportsIcon from '@/assets/icons/sports.svg'
import StarIcon from '@/assets/icons/star.svg'
import Star2Icon from '@/assets/icons/star2.svg'
import Star3Icon from '@/assets/icons/star3.svg'
import SunIcon from '@/assets/icons/sun.svg'
import SwapIcon from '@/assets/icons/swap.svg'
import TableTennisIcon from '@/assets/icons/table-tennis.svg'
import TennisIcon from '@/assets/icons/tennis.svg'
import TickSquareIcon from '@/assets/icons/tick-square.svg'
import TimeCircleIcon from '@/assets/icons/time-circle.svg'
import TrashIcon from '@/assets/icons/trash.svg'
import TwitchIcon from '@/assets/icons/twitch.svg'
import UploadIcon from '@/assets/icons/upload.svg'
import UpSquareIcon from '@/assets/icons/upsquare.svg'
import UsdcIcon from '@/assets/icons/usdc.svg'
import UsdtIcon from '@/assets/icons/usdt.svg'
import UserGroupIcon from '@/assets/icons/user-group.svg'
import UserTagIcon from '@/assets/icons/user-tag.svg'
import UserIcon from '@/assets/icons/user.svg'
import VerifiedIcon from '@/assets/icons/verified.svg'
import VipClubIcon from '@/assets/icons/vip-club.svg'
import VolleyballIcon from '@/assets/icons/volleyball.svg'
import WalletIcon from '@/assets/icons/wallet.svg'
import WatchIcon from '@/assets/icons/watch.svg'
import WebsiteFillIcon from '@/assets/icons/website-fill.svg'
import WebsiteIcon from '@/assets/icons/website.svg'
import Website2Icon from '@/assets/icons/website2.svg'
import WiFiIcon from '@/assets/icons/wifi.svg'
import XrpIcon from '@/assets/icons/xrp.svg'
import { colors } from '@/theme'

export const ICONS_MAP = {
  activity: ActivityIcon,
  'add-category-fill': AddCategoryFillIcon,
  add: AddIcon,
  'add-circle': AddCircleIcon,
  affiliate: AffiliateIcon,
  anonymous: AnonymousIcon,
  award: AwardIcon,
  badminton: BadmintonIcon,
  'balance-two': BalanceTwoIcon,
  baseball: BaseballIcon,
  basketball: BasketBallIcon,
  battery: BatteryIcon,
  blackjack: BlackJackIcon,
  blogs: BlogsIcon,
  bowling: BowlingIcon,
  boxing: BoxingIcon,
  brain: BrainIcon,
  btc: BtcIcon,
  calendar: CalendarIcon,
  'card-fill': CardFillIcon,
  card: CardIcon,
  casino: CasinoIcon,
  chart: ChartIcon,
  check: CheckIcon,
  cherry: CherryIcon,
  close: CloseIcon,
  confetti: ConfettiIcon,
  copy: CopyIcon,
  'close-square': CloseSquareIcon,
  dice: DiceIcon,
  dice2: Dice2Icon,
  document: DocumentIcon,
  document2: Document2Icon,
  'down-square': DownSquareIcon,
  'document-align-right-2': DocumentAlignRight2Icon,
  'document-align': DocumentAlignIcon,
  'document-download': DocumentDownloadIcon,
  'dollar-fill': DollarFillIcon,
  'dollar-square': DollarSquareIcon,
  dot: DotIcon,
  down: DownIcon,
  download: DownloadIcon,
  'edit-fill': EditFillIcon,
  'edit-square': EditSquareIcon,
  eth: EthIcon,
  eye: EyeIcon,
  eye2: Eye2Icon,
  'eye-closed': EyeClosedIcon,
  facebook: FacebookIcon,
  'faq-circle': FaqCircleIcon,
  'american-football': FootballIcon,
  foreign: ForeignIcon,
  'forgot-password': ForgotPasswordIcon,
  forum: ForumIcon,
  full: FullIcon,
  gambling: GamblingIcon,
  'gambling-fill': GamblingFillIcon,
  gamepad: GamePadIcon,
  gift: GiftIcon,
  google: GoogleIcon,
  headphone: HeadphoneIcon,
  'ice-hockey': HockeyIcon,
  international: InternationalIcon,
  information: InformationIcon,
  'information-square': InformationSquareIcon,
  left: LeftIcon,
  like: LikeIcon,
  link: LinkIcon,
  live: LiveIcon,
  'live-support': LiveSupportIcon,
  lobby: LobbyIcon,
  lock: LockIcon,
  logout: LogoutIcon,
  ltc: LtcIcon,
  menu: MenuIcon,
  menu2: Menu2Icon,
  'menu-fill': MenuFillIcon,
  message: MessageIcon,
  message2: Message2Icon,
  message3: Message3Icon,
  moon: MoonIcon,
  'more-square': MoreSquareIcon,
  mouse: MouseIcon,
  'e-sports': MouseIcon,
  notification: NotificationIcon,
  'paper-clip': PaperClipIcon,
  pin: PinIcon,
  'play-square': PlaySquareIcon,
  play: PlayIcon,
  profile: ProfileIcon,
  'profile-add1': ProfileAdd1Icon,
  'profile-add2': ProfileAdd2Icon,
  'profile-circle': ProfileCircleIcon,
  'profile-square': ProfileSquareIcon,
  promotion: PromotionIcon,
  ps51: Ps51Icon,
  rectangle: RectangleIcon,
  refresh: RefreshIcon,
  report: ReportIcon,
  right: RightIcon,
  right2: Right2Icon,
  rocket: RocketIcon,
  scan: ScanIcon,
  search: SearchIcon,
  security: SecurityIcon,
  'security-fill': SecurityFillIcon,
  send: SendIcon,
  send2: Send2Icon,
  send3: Send3Icon,
  settings: SettingsIcon,
  'shield-tick': ShieldTickIcon,
  situation: SituationIcon,
  soccer: SoccerIcon,
  'soccer-fill': SoccerFillIcon,
  sponsorship: SponsorshipIcon,
  sports: SportsIcon,
  star: StarIcon,
  star2: Star2Icon,
  star3: Star3Icon,
  sun: SunIcon,
  swap: SwapIcon,
  'table-tennis': TableTennisIcon,
  tennis: TennisIcon,
  'tick-square': TickSquareIcon,
  'time-circle': TimeCircleIcon,
  trash: TrashIcon,
  twitch: TwitchIcon,
  upload: UploadIcon,
  upsquare: UpSquareIcon,
  usdc: UsdcIcon,
  usdt: UsdtIcon,
  user: UserIcon,
  'user-group': UserGroupIcon,
  'user-tag': UserTagIcon,
  verified: VerifiedIcon,
  'vip-club': VipClubIcon,
  volleyball: VolleyballIcon,
  wallet: WalletIcon,
  watch: WatchIcon,
  'website-fill': WebsiteFillIcon,
  website: WebsiteIcon,
  website2: Website2Icon,
  wifi: WiFiIcon,
  xrp: XrpIcon,
  single: SingleIcon,
  single2: Single2Icon,
  multi: MultiIcon,
  multi2: Multi2Icon
}

export type IconType = keyof typeof ICONS_MAP

export type IconColor = keyof typeof colors

interface AppIconProps {
  name: IconType
  size?: number
  color?: IconColor
}

const AppIcon: FC<AppIconProps> = ({ name, size = 20, color, ...props }) => {
  const IconComponent = ICONS_MAP[name]

  if (!IconComponent) {
    console.error(`Icon "${name}" not found.`)

    return null
  }

  return (
    <Stack
      className='app-icon'
      component='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: color && colors[color],
        '& svg': {
          width: size,
          height: size
        }
      }}
      {...props}
    >
      <IconComponent />
    </Stack>
  )
}

export default memo(AppIcon)
