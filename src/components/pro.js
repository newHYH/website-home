const proList = [{
        title: '投屏时手机“拿起手机亮屏”功能失效',
        con: '<p class="b-t">问题现象：</p>已经开启拿起手机亮屏功能，投屏时，手机到达设置的休眠时间灭屏，此时拿起手机亮屏功能失效。<p class="b-t">解决方案：</p>点击电源键可点亮手机屏幕。',
    }, {
        title: '同种型号机器的不同后盖之间存在色差/偏色/颜色差异',
        con: '<p class="b-t"></p>后盖采用特殊镀膜工艺，工艺要求非常苛刻，即使在严格的质量管控下，也只能把颜色差异控制在一定范围内，在不同的角度或光照条件下，可能存在一定的颜色差异或视觉差异。这是正常现象，不会影响手机的正常使用，请放心使用。'
    }, {
        title: '下拉通知栏自动亮度勾选框没有了',
        con: '<p class="b-t">问题现象：</p>下拉通知栏自动亮度条可以手动调节亮度，但是没有自动亮度勾选框了。<p class="b-t">问题原因：</p>在新的系统版本中，下拉通知栏提供快捷调节亮度的亮度条，不再提供自动亮度勾选框。<p class="b-t">解决方案：</p>您需要自动调节亮度，请您在“设置”中搜索并进入“亮度”/显示和亮度，打开或关闭“自动调节”。'
    }, {
        title: '4 手机无线投屏后，大屏上的照片不能随着手机旋转而旋转',
        con: '<p class="b-t">问题现象：</p>手机无线投屏后，大屏上的照片不能随着手机旋转而旋转。<p class="b-t">问题原因：</p>如果您使用的是DLNA协议连接大屏，该协议不支持大屏端的显示跟随手机屏幕旋转而转变方向。<p class="b-t">解决方案：</p>如果您的大屏设备支持其他协议，建议您使用其他投屏协议进行连接，在选择连接投屏设备时选择支持电脑模式或者手机模式投屏，此模式下大屏端显示可跟随手机屏幕转变方向。'
    },
    {
        title: '5 手机通话声音与微信语音投屏播放出现混音',
        con: '<p class="b-t">问题现象：</p>在手机投屏模式下，手机通话时打开微信播放语音信息，会出现混音现象。<p class="b-t">问题原因：</p>如果使用听筒接听电话，此时打开微信语音，微信语音会从大屏输出，再将手机靠近耳朵接听电话，微信会识别到接近听筒的动作而将微信语音输出切换到听筒，就会导致通话音和微信语音都从听筒输出，出现混音现象。<br>如果在手机端播放微信语音，此时电话来电，则微信语音会被打断。<br>如果使用免提接听电话，此时打开微信语音，微信语音会从大屏输出。<p class="b-t">解决方案：</p>如果您想在接听电话时播放微信语音，您可以选择打开免提接听电话，此时微信语音会从大屏输出，不会造成混音现象。不过为了保证您的通话质量，建议您通话完成后再接听微信语音。'
    }, {
        title: '6 手机前置升降式摄像头异常弹出',
        con: '<p class="b-t">问题现象：</p>1. 使用视频通话类应用（ 如微信,Duo等） 时， 当收到视频呼叫请求后， 未接听时接收方前置摄像头会自动弹出。<br> 2. 手机在使用视频类应用（ 如YouCam,Facebook,水印相机等） 时需要使用摄像权限时， 摄像头出现弹出并又缩回的现象。 <br ><p class="b-t">问题原因：</p> 该问题是由于当前部分视频类应用设计时未考虑到升降式摄像头的手机使用场景导致。 <br ><p class="b-t">解决方案：</p>1. 请确认您的应用为最新版本。 <br > 2. 若新版本仍有问题， 您可向发生问题的应用客服进行反馈， 我们也会积极和相关应用方沟通。 <br > 微信已在新版本中优化此问题， 请您在应用市场中将微信升级至最新版本后尝试。 '
    },
    {
        title: '7 低温下升降式摄像头无法弹出或自动缩回 ',
        con: '<p class="b-t">问题现象：</p>低于 - 10℃ 环境温度下长时间放置后， 升降式摄像头不能完全伸出或者自动缩回， 连续运行几次后正常。 < p class = "b-t" > 问题原因： < /p>我们使用的升降机是电机+齿轮机械传动结构，里面存在润滑油，低温下，润滑油黏性增大导致升降推力不足。<p class="b-t">解决方案：</p > 您可以通过打开、 关闭前置摄像头或者切换前后置摄像头来提高齿轮箱温度， 温度升高后（ - 10℃ 以上） 摄像头可正常使用。'
    },
    {
        title: '8 下拉状态栏， 屏幕会稍微变暗 ',
        con: '<p class="b-t">问题现象：</p>屏幕上方下拉状态栏，屏幕会稍微变暗。<p class="b-t">问题原因：</p>下拉状态栏之后，也会触发通知面板下拉，为了让快捷开关和通知面板与当前界面有明显区别，会在通知面板背后有一个半透明的显示效果，可能会让您误以为屏幕变暗。此为正常现象，请您放心使用。'
    }, {
        title: '9 应用内滑动误识别为手势导航返回',
        con: '<p class="b-t">问题现象：</p>开启手势导航后，在接近屏幕两侧滑动时，概率性触发为手势返回功能。例如，在小说阅读时，进行边缘滑动翻页操作；或在地图中，进行边缘滑动移动地图等操作时，触发手势返回功能。<p class="b-t">解决方案：</p>1.  建议您可靠近屏幕中间区域一点进行翻页或滑动操作。<br>2.  如果手势导航功能给您带来不便，建议您前往““设置 > 系统”/“系统和更新”>“系统导航方式 > 手势导航””选择其他导航方式即可。'
    }, {
        title: '10 手机投屏电脑模式时,大屏显示溢出或者黑边',
        con: '<p class="b-t">问题现象：</p>手机投射到大屏后，大屏显示界面有部分图标出现在在正常显示范围以外，导致无法对大屏操作。<p class="b-t">问题原因：</p>大屏设备对投屏的内容进行了扩展显示，导致投屏的内容超出了正常显示范围。 <p class="b-t" > 解决方案： </p>方案一:<br>在桌面上点击鼠标右键，在菜单中选择调整屏幕，可以在屏幕全屏、较小、最小之间切换。如下图所示：<br>方案二：<br>您可以进入电视或投影仪的设置菜单界面，调整电视机或投影仪的显示模式，不同电视或投影仪的设置方式不同，请您以电视或投影仪的实际显示为准。<br>以下 3 种型号电视的设置方式供您参考：<br>海信：请您通过遥控器上的缩放键进行调整，可以在 4:3、16:9、点对点这几个选项间切换调整；<br>创维：在遥控器上按菜单键，然后通过左右键切换到显示菜单项，进入页面后在 4:3,16:9 等选项间切换调整；<br>三星：在遥控器中按项目键，选择图像界面，点击确认进入屏幕调整界面，调整屏幕显示。'
    }, {
        title: '11 通过无线投屏投本地视频到电视上的画面是翻转的 ',
        con: '<p class="b-t">问题现象：</p>通过无线投屏连接到电视，该视频播放时是翻转状态。<p class="b-t">问题原因：</p>推送视频协议没有提供设置播放方向的能力，视频的解析和播放是由对端设备完成（手机测无法更改），所以播放方向也是由对端决定，因此会出现相同的资源推送到不同的电视/盒子时，表现不一样。<p class="b-t">解决方案：</p>建议您咨询电视厂商设置视频方法。'
    }, {
        title: '12 录入新的人脸（指纹）无法解锁应用锁',
        con: '<p class="b-t">问题现象：</p>人脸/指纹识别后，提示“录入的人脸/指纹已发生变化，请输入密码重新授权使用”仍然要输入自定义密码才能进入。<p class="b-t">问题原因：</p>录入新的人脸/指纹后，去解锁应用锁时，应用锁检测到是新的人脸/指纹，需要校验自定义密码进行关联。<p class="b-t">解决方案：</p>您可以输入自定义密码即可关联当前人脸 / 指纹。 < br >您也可以重新进入“ 设置 > 生物识别与密码 > 人脸 / 指纹” 的设置界面， 关闭再打开“ 访问应用锁” 开关， 输入当前应用锁自定义密码， 即可关联所有录入的人脸 / 指纹信息。'
    }, {
        title: '13 手机滑屏时误触应用图标 ',
        con: '<p class="b-t">问题现象：</p>滑屏时，误触应用图标，或者启动应用内操作按钮、操作菜单等。 <p class="b-t" >解决方案：</p>建议您滑屏时避免很缓慢的滑动，以减少应用误识别为长按操作，启动操作菜单的概率。<br>您也可以在滑屏时避免手指触摸到应用图标、 应用操作按钮等， 有效的的减少误触。 '
    }, {
        title: '14 无线投屏部分电视首次连接手机没有声音 ',
        con: '<p class="b-t">问题现象：</p>使用“无线投屏”功能，部分电视首次连接手机时没有声音输出，再次连接有声音。<p class="b-t">问题原因：</p>部分电视对不支持HDCP（高清视频）协议的设备，存在连接兼容性问题。 <p class="b-t" > 解决方案： </p>手机端再次连接即可正常使用。'
    }, {
        title: '15 边玩游戏边免提通话时，对方能听到手机游戏的声音',
        con: '<p class="b-t"></p>您好，该场景属于正常情况，请您放心使用；建议您在玩游戏、听音乐或者看视频时，尽量使用耳机，或听筒接听电话。<br>同时我们会持续对此情况进行优化。'
    },
    {
        title: '16 移动VoLTE下，陌生人来电界面会显示一行+86号码',
        con: '<p class="b-t"></p>是否携带+86与当地网络有关, 此显示对任何功能都没有影响，请您放心使用。'
    },
    {
        title: '17 连接WLAN热点时，MAC地址为什么会随机变化，如何设置',
        con: '<p class="b-t">问题现象：</p>在连接不同的热点时，首发10.x及其以上的手机会默认使用不同的随机MAC地址。比如您连接公司的热点CompanyHotspot，连接成功后，点击该热点，在网络详情中可以看到此次连接所使用的MAC地址。当您回家后连接家里的热点HomeHotspot，会使用不同的随机MAC，避免被获取到真实的MAC地址，防止个人信息泄露。<p class="b-t">问题原因：</p>为了保护用户的隐私，提升WLAN使用的安全性，我们开发了随机MAC特性。<br>手机默认使用随机MAC连接，若有需要，可以更改使用设备MAC发起连接，设备MAC固定且唯一；在您不更改热点的名称和加密方式的情况下，无论是断开重连还是忘记该热点重新发起连接，每次连接该热点都会保持使用同一个随机MAC .<br><p class="b-t">解决方案：</p>1.    在连接WLAN热点时：<br>−    对于加密的热点:<br>在输入密码界面，勾选“显示高级选项”，点击““隐私””，即可选择此次连接是“使用随机 MAC”还是“使用设备 MAC”。“使用设备 MAC”连接成功后，在网络详情中，可以看到此次连接所使用的是设备MAC。<br>− 对于不加密的热点：<br>可在热点列表界面，滑动至最后，选择“添加其他网络”，通过手动添加目标热点的方式，勾选“显示高级选项”，点击“隐私”，设置为“使用设备 MAC”发起连接。<br>2. 对于已连接的WLAN热点：<br>长按热点，选择“修改网络”，勾选“显示高级选项”，同样可以在“使用随机 MAC”和“使用设备 MAC”之间进行修改。<br>若您想快速获取本机的设备MAC地址，可在WIFI打开的情况下，进入“设置 > 关于手机 > 状态消息”下查看“WLAN MAC 地址”，此处显示的是本机的设备MAC。'
    },
    {
        title: '18 耳机停止播放时异响',
        con: '<p class="b-t">问题现象：</p>在安静的环境下使用耳机播放音乐，在音乐停止后2秒左右有杂音。<p class="b-t">问题原因：</p>停止播放音乐时会等待2-3秒钟时间，才会真正关闭耳机硬件通道。在音乐停止到耳机通路关闭之间这几秒种内，耳机放大器仍处于工作状态，存在硬件电流底噪。耳机通路彻底关闭时会听到pop音。<br>该现象仅发生在耳机硬件通道关闭时刻，您仍可正常使用手机。'
    },
    {
        title: '19 切换或暂停音乐时，状态栏音乐图标闪烁',
        con: '<p class="b-t">问题现象：</p>使用手机自带的或三方音乐软件播放音乐时，切换或暂停歌曲时，通知栏的音乐图标会出现闪烁现象，歌曲字幕也会出现稍有延迟的现象。问题原因：</p>音乐应用使用时， 当点击播放、 暂停或切换时， 状态栏相应位置应用图标会出现闪烁， 此功能属于系统特性， 请您放心使用。 '
    },
    {
        title: '20 通话接通前彩铃有杂音',
        con: '<p class="b-t">问题现象：</p>通话接通前等待彩铃声存在杂音。<p class="b-t">问题原因：</p>当被叫用户（您呼叫的用户）是联通用户时，部分彩铃声音源存在破音等问题，导致您听到的彩铃有杂音。<p class="b-t">解决方案：</p>建议您告知被叫用户（您呼叫的用户）联系联通客服更换彩铃。'
    },
    {
        title: '21 手机投屏时开启激光笔模式不支持键盘快捷键',
        con: '<p class="b-t">问题现象：</p>手机投屏中， 点击触控板上的激光笔图标进入激光笔模式， 在这种情况下， 使用键盘快捷键无效。 <p class="b-t" > 问题原因： </p>激光笔模式与键盘键会存在冲突，因此设计为开启激光笔模式自动禁用快捷键。<p class="b-t">解决方案：</p > 建议您在退出激光笔模式后再使用键盘快捷键， 点击激光笔面板上的“ X” 或者再次点击激光笔图标即可退出激光笔模式。 '
    },
    {
        title: '22 车载听不到手机的导航音',
        con: '<p class="b-t">问题现象：</p>车载听不到手机的导航音。<p class="b-t">解决方案：</p>1.    车载需要打开语音通道，尝试找到车载上的“资源”按钮，点击后看是否能听到导航音；<br>2.   如果仍没有解决，建议您向车载厂商反馈解决。'
    },
    {
        title: '23 耳机音量大时使用全民K歌耳返功能有杂音',
        con: '<p class="b-t">问题现象：</p>插入耳机打开全民K歌的耳机音返功能，音量调至较大时耳机会听到杂音。<p class="b-t">解决方案：</p>全民K歌通过软件模拟的耳返功能与手机存在兼容性问题。建议使用时将音量调低，调低后没有杂音。请您留意全民K歌后续版本更新。'
    },
    {
        title: '24 点击精彩时刻视频弹出下载Quik应用',
        con: '<p class="b-t">问题现象：</p>点击精彩时刻视频弹出下载Quik应用。<p class="b-t">问题原因：</p>精彩时刻播放需要使用Quik应用播放，但是手机没有预装。<p class="b-t">解决方案：</p>请您在“尚未安装Quik视频编辑客户端，是否立即下载？”弹框，点击“下载”，会跳转到应用市场Quik安装界面，点击安装即可自动下载安装，重新进入图库使用即可。'
    },
    {
        title: '25 打电话时手机不显示5G，显示2G、3G是什么原因？',
        con: '<p class="b-t">问题原因：</p>运营商还没有推出基于5G的通话解决方案（VoNR - Voice over New Radio），如果您没有开通VoLTE功能，打电话时会显示2/3G。<p class="b-t">解决方案：</p>1.  您需要与运营商确认是否已开通VoLTE业务。<br>2.  建议您从屏幕顶部下划呼出快捷菜单，长按“移动数据”图标进入设置界面，打开VoLTE开关即可。（部分机型已默认开启VoLTE功能，无VoLTE开关，请忽略此步骤）<br> 打开VoLTE功能后通话时显示5G还是4G取决于运营商网络，但是不会影响到您通话时可上网功能。'
    }, {
        title: '26 人像模式下拍照，侧脸情况下出现椭圆暗斑',
        con: '<p class="b-t">问题现象：</p>人像模式下拍照，侧脸情况下出现椭圆暗斑。<p class="b-t">问题原因：</p>人像模式下，为了达到更好的拍照效果，会对人脸五官部分进行亮度的提升或降低，让五官更立体，但部分拍摄场景下如侧脸拍照可能由于光线和算法的原因导致识别位置不准确。您可以尝试更换拍照角度重新拍照。'
    }, {
        title: '27 超级广角模式难触发',
        con: '<p class="b-t">问题现象：</p>超级广角模式识别触发率低。<p class="b-t">问题原因：</p>由于手机预览画面可能变化频繁，如边移动边使用相机。每个模式触发都需要稳定0.5S才会触发出来。<br>只有“摩天大楼”、“城市俯瞰”、“商场中庭”、“合影”的场景才能触发“超级广角”模式。其中“合影”只在合影人数>=5人，且取景画面边框有人脸，才会触发”超级广角“模式。<p class="b-t">解决方案：</p>1.将手机对准“摩天大楼”、“城市俯瞰”、“商场中庭”、“合影”的场景，手机持稳。将自动识别出“超级广角”模式。<br>2.您可以点击界面中出现的“超级广角”按钮，跳转到广角镜头。从而拍出更广阔的视场角。'
    }, {
        title: '28 超广角开启闪光灯拍照有暗角',
        con: '<p class="b-t">问题现象：</p>手机在开启闪光灯进行超广角拍摄时，拍照有暗角。<p class="b-t">问题原因：</p>由于超广角视角比普通镜头大很多，闪光灯光斑无法全部覆盖视角内的物体；导致在超广角模式下，开启闪光灯拍照有暗角。<p class="b-t">解决方案：</p>推荐您在普通模式下进行拍摄。'
    }, {
        title: '29 光斑特效效果不好',
        con: '<p class="b-t">问题现象：</p>光斑特效效果差<p class="b-t">问题原因：</p>光斑特效需要照片的背景中，必须有对比明显的点光源，才能拍摄出较好的光斑效果。<p class="b-t">解决方案：</p>建议选择背景较暗，并且有明显点光源的场景拍摄。'
    },
    {
        title: '30 使用超广角镜头拍照时，画面变形',
        con: '<p class="b-t">问题现象：</p>手机切换广角镜头拍照时，四周会出现画面变形或模糊的现象，近距离情况下这种现象更为明显。典型现象有鼻子大、脸大、头偏、脚长、四周弯曲。<p class="b-t">问题原因：</p>由于广角镜头和普通的相机镜头差异较大，使用广角镜头拍照时，照片的效果和人眼看到的东西会有一定的差异，主要表现为照片四周会出现拉伸和变形，这是摄像中常见的“畸变”效果。详细介绍，不问不答：<br>由于广角镜头的物理特性影响，拍出来的照片四周容易出现变形（畸变）。一般来说包含光学畸变和透视畸变两种原因，广角镜头拍照出的变形效果，主要是透视因素引起的。<br>1. 光学畸变：大广角镜头的光学畸变会比常规镜头严重，我们已经通过优化光学设计和软件算法矫正广角镜头下的物理畸变，因此该畸变可以做到不明显。比如正对着拍平面，或者远处的建筑，四周不会出现变形。<br>2. 透视效果（远小近大）：是同样大小的物体，离镜头越近的物体看起来更大，反之看起来越小；不在目光/镜头垂直平面的东西，投影到照片（平面）后都是斜的，这是正常的自然现象。解决方案：</p>1.  可以点击拍照界面右侧白点，手动切换到1x普通模式。<br>2.  调整拍摄主体在中心位置。<br>3.  调整拍摄距离和角度，拉远距离和正对着拍，可以有效降低透视畸变。'
    },
    {
        title: '31 在拍照模式下切换到广角时画面变化大',
        con: '<p class="b-t">问题现象：</p>从拍照模式，缩放屏幕或者点击变焦图标切换到广角拍照时。相机的预览画面同之前的画面有变化（位置、视角、颜色、亮度等），会感觉到明显差异或画面跳变。<p class="b-t">问题原因：</p>从拍照模式，切换到广角拍照模式时，相机会自动在不同摄像头之间进行切换。<br/>拍摄广角的摄像头视角，比普通摄像头的视角大。再加上光学因素的影响，会造成切换前后画面的位置、视角、颜色、亮度等出现变化。所以会感觉到画面变化明显。是多个摄像头之间切换的正常现象。 '
    },
    {
        title:'32 广角和超广角的区别',
        con:'<p class="b-t"></p>普通广角镜头的等效焦距一般为38－24毫米，视角为60－84度；<br>超广角镜头的等效焦距为20－13毫米，视角为94-118度。'
    },
    {
        title:'33 电影模式人像留色/AI色彩不稳定，颜色不正常',
        con:'<p class="b-t">问题现象：</p>电影模式下，当画面中人物整体不完整的时候，人体的颜色保留不稳定，出现部分颜色不正常<p class="b-t">问题原因：</p>电影模式下的AI人像留色/AI色彩功能，需要把人体同环境中的景物进行区分。当录像画面中人体不完整、人体和背景中的位置、轮廓等差异较小，或者移动过快时，相机不能把人体从背景中很好的区分出来，会出现人物颜色保留不完整的现象。现实生活中，拍摄场景是千变万化的，还存在多种场景混杂的情况，所以无可避免会存在误识别问题。我们会持续优化算法，为您带来更好的拍照体验。<p class="b-t">建议：</p>建议拍摄时选择人体完整，同背景纹理差异较大的环境进行拍摄。'
    },
    {
        title:'34 手机照片上物体边缘有紫色、紫边现象',
        con:'<p class="b-t">问题现象：</p>照片上物体有紫边，在超广角模式下会更加明显。<p class="b-t">答复口径：</p>当被拍摄物体与背景亮度反差比较大时（如逆光条件），在高光与低光部位交界处会出现色斑现象，与相机镜头的色散等有关。（紫边现象）<br/>光线的色散相对严重。所以超广角镜头相对于普通广角镜头拍照时，紫边效应会明显一些，是超广角镜头的光学特性。'
    },
    {
        title:'35 拍照后快速进入左下图库，照片会动，会变化',
        con:'<p class="b-t">问题现象：</p>拍照后快速进入左下图库，照片会动，会变化。<p class="b-t">问题原因：</p>您好，为了获得更好的拍照效果，我们采用多帧合成的方式对照片效果进行了全面优化，您看到的效果变化过程是在对照片进行优化处理，只在您本次拍照后第一次快速进入图库时会看到，不会影响照片最终的成像效果，请您放心使用。'
    },
    {
        title:'36 4K视频只能录10分钟',
        con:'<p class="b-t">答复口径：</p>由于4K录像功耗较大，超过10分钟会导致手机过热，有损坏手机其他零器件的风险，所以我们对4K录像时长做了限制，一次拍摄不超过10分钟。'
    },
    {
        title:'37 滚动截屏编辑界面，不支持单指上下滑动',
        con:'<p class="b-t">问题现象：</p>滚动截屏完成后，直接进入编辑界面，此时单指操作只能进行涂鸦、马赛克、橡皮擦等编辑操作，无法实现上下滑动图片功能。<p class="b-t">问题原因：</p>滚动截屏完成后，直接进入编辑界面，此时单指只能进行涂鸦、马赛克、橡皮擦等编辑操作，上下滑动需要通过双指操作来实现。'
    },
    {
        title:'38 第三方应用锁屏切换用户，应用被关闭，状态未保存',
        con:'<p class="b-t">问题现象：</p>第三方应用（如微信、3D坦克大战），锁屏切换用户，再切换回来，应用被关闭，状态没有保存。<p class="b-t">问题原因：</p>这类第三方应用一般申请了录音权限，为了防止应用占用录音资源而迟迟不释放，导致切换的用户无法使用录音功能。系统设计策略规定在切换用户时，所有申请了录音权限的应用都会被关闭，切换回来时需要重新登录。'
    },
    {
        title:'39 驾驶模式使用蓝牙耳机，音乐和导航语音播报从手机发声',
        con:'<p class="b-t">问题现象：</p>驾驶模式使用蓝牙耳机，音乐和导航语音播报从手机发声。<p class="b-t">问题原因：</p>在驾驶模式中，蓝牙耳机控制启动录音监听，因此蓝牙耳机其他功能就无法支持，比如声音输出等。驾驶模式的时候不能使用蓝牙耳机听歌和导航的声音，这些声音只能从话筒中发出，关闭了驾驶模式一切正常。'
    },
    {
        title:'40 手机耳机线控开启音乐播放器不能设置',
        con:'<p class="b-t">问题现象：</p>手机耳机线控开启音乐播放器不能设置。<p class="b-t">问题原因：</p>优畅享手机耳机的线控功能只能开启自带音乐播放器，不支持其它第三方音乐软件。<p class="b-t">解决方案：</p>建议您使用手机自带音乐播放器设置。'
    }
]
export default proList