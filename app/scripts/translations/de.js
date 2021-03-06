// German
'use strict';
var de = function() {}
de.code = 'de';
de.data = {

/* Navigation*/
NAV_AddWallet               : 'Wallet hinzufügen ',
NAV_BulkGenerate            : 'Mehrere Wallets erstellen ',
NAV_Contact                 : 'Kontakt ',
NAV_Contracts               : 'Verträge ',
NAV_DeployContract          : 'Vertrag aufstellen ',
NAV_ENS                     : 'ENS',
NAV_GenerateWallet_alt      : 'New Wallet ',
NAV_GenerateWallet          : 'Wallet erstellen ',
NAV_Help                    : 'Hilfe ',
NAV_InteractContract        : 'Interact with Contract ',
NAV_Multisig                : 'Multisig ',
NAV_MyWallets               : 'Meine Wallets ',
NAV_Offline                 : 'Sende offline ',
NAV_SendEther               : 'Sende Ether und Tokens ',
NAV_SendTokens              : 'Sende Tokens ',
NAV_SignMsg                 : 'Sign Message ',
NAV_Swap                    : 'Swap ',
NAV_ViewWallet              : 'Wallet Infos anzeigen ',
NAV_YourWallets             : 'Deine Wallets ',

/* General */
x_Access                    : 'Access ',
x_AddessDesc                : 'Your Address can also be known as you `Account #` or your `Public Key`. It is what you share with people so they can send you Ether or Tokens. Find the colorful address icon. Make sure it matches your paper wallet & whenever you enter your address somewhere. Dies ist deine "Kontonummer" oder dein "Öffentlicher Schlüssel". Du benötigst diese Adresse, wenn dir jemand Ether senden möchte. Das Icon ist eine einfache Möglichkeit, die Adresse zu überprüfen ',
x_Address                   : 'Deine Adresse ',
x_Cancel                    : 'Abbrechen ',
x_CSV                       : 'CSV-Datei (unverschlüsselt) ',
x_Download                  : 'Herunterladen ',
x_Json                      : 'JSON-Datei (unverschlüsselt) ',
x_JsonDesc                  : 'Dies ist die unverschlüsselte Version deines privaten Schlüssels im JSON-Format. Du benötigst daher kein Passwort, aber jeder, der über diese JSON-Datei verfügt, hat ohne Passwort Zugang zu deinem Wallet und dem darin enthaltenen Ether. ',
x_Keystore                  : 'Keystore File (UTC / JSON · Empfohlen · Verschlüsselt) ',
x_Keystore2                 : 'Keystore File (UTC / JSON) ',
x_KeystoreDesc              : 'Diese Keystore-Datei passt zu dem Format, das von Mist verwendet wird, sodass du diese Datei dort zukünftig einfach importieren kannst. Es ist empfehlenswert, diese Datei herunterzuladen und zu sichern. ',
x_Mnemonic                  : 'Mnemonic Phrase ',
x_ParityPhrase              : 'Parity Phrase ',
x_Password                  : 'Passwort ',
x_Print                     : 'Papier-Version des Wallets drucken ',
x_PrintDesc                 : 'ProTip: Klicke auf "Drucken" und sichere die Datei als PDF, auch wenn du keinen Drucker hast! ',
x_PrintShort                : 'Drucken ',
x_PrivKey                   : 'Privater Schlüssel (unverschlüsselt) ',
x_PrivKey2                  : 'Privater Schlüssel ',
x_PrivKeyDesc               : 'Dies ist die unverschlüsselte Textversion deines privaten Schlüssels, d. h. du benötigst kein Passwort. Wenn jemand über diesen unverschlüsselten privaten Schlüssel verfügt, hat er/sie ohne Passwort Zugang zu deinem Wallet. Es wird daher empfohlen, den privaten Schlüssel zu verschlüsseln. ',
x_Save                      : 'Sichern ',
x_TXT                       : 'TXT-Datei (unverschlüsselt) ',
x_Wallet                    : 'Wallet ',

/* Header */
MEW_Warning_1               : 'Bitte prüfe stets die URL, bevor du auf dein Wallet zugreifst oder ein neues Wallet erzeugst. Vorsicht vor Phishing-Seiten! ',
CX_Warning_1                : 'Stelle sicher, dass du über eine **externe Sicherung** von allen Wallets verfügst, die du hier speicherst. Es gibt viele Möglichkeiten, die dazu führen können, dass deine in dieser Chrome-Extension gespeicherten Daten verloren gehen, z.B. Deinstallation oder Neu-Installation. Diese Extension erleichert den Zugang zu deinen Wallets, ist jedoch keine empfohlene Möglichkeit, diese zu sichern. ',
MEW_Tagline                 : 'Open Source JavaScript Client-Side Ether Wallet ',
CX_Tagline                  : 'Open Source JavaScript Client-Side Ether Wallet Chrome Extension ',

/* Footer */
FOOTER_1                    : 'Ein quelloffenes, browserseitiges Werkzeug zur Erzeugung von Ethereum-Wallets und Versenden von Transaktionen. ',
FOOTER_1b                   : 'Erstellt von ',
FOOTER_2                    : 'Spenden sind herzlich willkommen ',
FOOTER_3                    : 'Browserseitige Wallet-Erzeugung durch ',
FOOTER_4                    : 'Disclaimer ',

/* Sidebar */
sidebar_AccountInfo         : 'Kontoinformation ',
sidebar_AccountAddr         : 'Kontoadresse ',
sidebar_AccountBal          : 'Kontostand ',
sidebar_TokenBal            : 'Token Kontostand ',
sidebar_Equiv               : 'Währungs-Gegenwerte ',
sidebar_TransHistory        : 'Transaktions-Historie ',
sidebar_donation            : 'MyEtherWallet ist ein freier, quelloffener Service, der deiner Privatsphäre und Sicherheit gewidmet ist. Je mehr Spenden wir erhalten, desto mehr Zeit können wir investieren, um neue Funktionen zu programmieren, dein Feedback zu verarbeiten und dir zu geben, was du dir wünschst. Wir sind nur zwei Leute, die die Welt ändern möchten. Hilfst du uns dabei? ',
sidebar_donate              : 'Spenden ',
sidebar_thanks              : 'Dankeschön!!! ',

/* Decrypt Panel */
decrypt_Access              : 'Wie möchtst du auf dein wallet zugreifen? ',
decrypt_Title               : 'Wähle das format deines privaten schlüssels ',
decrypt_Select              : 'Wallet auswählen ',

/* Add Wallet */
ADD_Label_1                 : 'Was möchtest du tun? ',
ADD_Radio_1                 : 'Neues Wallet erstellen ',
ADD_Radio_2                 : 'Wallet-Datei auswählen (Keystore / JSON) ',
ADD_Radio_2_alt             : 'Wallet-Datei auswählen ',
ADD_Radio_2_short           : 'WALLET-DATEI AUSWÄHLEN... ',
ADD_Radio_3                 : 'Kopiere/Tippe deinen privaten Schlüssel ein ',
ADD_Radio_4                 : 'Kontoadresse zur Beobachtung hinzufügen ',
ADD_Radio_5                 : 'Füge deinen Mnemonic ein ',
ADD_Radio_5_Path            : 'Select HD derivation path ',
ADD_Radio_5_PathCustom      : 'Benutzerdefiniert ',
ADD_Label_2                 : 'Wähle ein Kürzel ',
ADD_Label_3                 : 'Deine Datei ist verschlüsselt. Bitte gib das Passwort ein ',
ADD_Label_4                 : 'Kontoadresse zur Beobachtung hinzufügen ',
ADD_Warning_1               : 'Du kannst unter dem "Wallet-Tab" eine Kontoadresse "beobachten", ohne den privaten Schlüssel hochzuladen. Du hast damit **keinen** Zugang zu diesem Wallet und kannst auch keinen Ether daraus versenden. ',
ADD_Label_5                 : 'Kontoadresse eingeben ',
ADD_Label_6                 : 'Wallet entsperren ',
ADD_Label_6_short           : 'Entsperren ',
ADD_Label_7                 : 'Kontoadresse hinzufügen ',

/* Generate Wallets */
GEN_desc                    : 'Wenn du mehrere Wallets auf einmal erstellen möchtest, kannst du dies hier tun ',
GEN_Label_1                 : 'Gib ein starkes Passwort ein (mindestens 9 Zeichen) ',
GEN_Placeholder_1           : 'BITTE VERGISS NICHT dieses Passwort an einem sicheren Ort zu notieren! ',
GEN_SuccessMsg              : 'Erfolgreich! Dein Wallet wurde erzeugt. ',
GEN_Label_2                 : 'Sichere deine Keystore-Datei oder deinen privaten Schlüssel. Sichere auch dein Passwort! ',
GEN_Label_3                 : 'Sichere deine Kontoadresse. ',
GEN_Label_4                 : 'Optional: Drucke dein Papier-Wallet oder speichere einen QR-Code. ',

/* Bulk Generate Wallets */
BULK_Label_1                : 'Anzahl zu generierender Wallets ',
BULK_Label_2                : 'Wallets erstellen ',
BULK_SuccessMsg             : 'Erfolgreich! Deine Wallets wurden erstellt. ',

/* Sending Ether and Tokens */
SEND_addr                   : 'An Adresse ',
SEND_amount                 : 'Zu sendender Betrag ',
SEND_amount_short           : 'Betrag ',
SEND_custom                 : 'Benutzerdefiniert ',
SEND_gas                    : 'Gas ',
SEND_TransferTotal          : 'Gesamten verfügbaren Saldo übertragen ',
SEND_generate               : 'Erzeuge Transaktion ',
SEND_raw                    : 'Transaktion (Binärformat) ',
SEND_signed                 : 'Signierte Transaktion ',
SEND_trans                  : 'Sende Transaktion ',
SEND_custom                 : 'Add Custom Token ',
SENDModal_Title             : 'Achtung! ',
/* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
SENDModal_Content_1         : 'Du bist dabei, ',
SENDModal_Content_2         : 'an die Adresse ',
SENDModal_Content_3         : 'zu senden. Bis du sicher, dass du das willst? ',
SENDModal_Content_4         : 'HINWEIS: Wenn du eine Fehlermeldung erhälst, musst du vermutlich deinen Ether-Saldo erhöhen, um die Gas-Kosten des Token-Versands zu bezahlen. Gas wird in Ether bezahlt. ',
SENDModal_No                : 'Nein, ich möchte diesen Vorgang abbrechen! ',
SENDModal_Yes               : 'Ja, ich bin mir sicher! Führe die Transaktion durch. ',

/* Tokens */
TOKEN_Addr                  : 'Adresse ',
TOKEN_Symbol                : 'Token-Symbol ',
TOKEN_Dec                   : 'Dezimalstellen ',
TOKEN_hide                  : 'Verstecke Token ',
TOKEN_show                  : 'Zeige alle Tokens ',

/* Send Transaction */
TRANS_desc                  : 'Wenn du Token senden willst, nutze bitte die "Sende Tokens" Funktion ',
TRANS_warning               : 'Wenn du die "Nur ETH" oder "Nur ETC" Funktionen benutzt, erfolgt die Transaktion über einen Vertrag. Einige Dienste haben ein Problem damit diese Transaktionen zu empfangen. Mehr lesen. ',
TRANS_advanced              : '+Fortgeschritten: Daten hinzufügen ',
TRANS_data                  : 'Daten ',
TRANS_gas                   : 'Gas Limit ',
TRANS_sendInfo              : 'Eine Standard Transaktion mit 21000 Gas kostet 0.000441 ETH. Wir zahlen einen minimal höheren Gaspreis von 0.000000021 ETH um zu garantieren, dass die Transaktion schnell bearbeitet wird. Wir erheben keine Transaktionsgebühren. ',

/* Send Transaction Modals */
TRANSModal_Title            : '"Nur ETH" und "Nur ETC" Transaktionen ',
TRANSModal_Content_0        : 'Ein Hinweis zu den verschiedenen Transaktionen und Angeboten ',
TRANSModal_Content_1        : '**ETH (Standard Transaktion): ** Dies erzeugt eine Standard Transaktion direkt von einer Adresse zu einer anderen. Diese nutzt standardmässig 21000 Gas. Es ist gut möglich, dass alle Transaktionen dieser Art auf der ETC Blockchain wiederholt werden (Replay Attacke). ',
TRANSModal_Content_2        : '**Nur ETH: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETH** Blockchain ausgeführt wird. ',
TRANSModal_Content_3        : '**Nur ETC: ** Dies sendet die Transaktion so über [Timon Rapp\'s "replay protection contract" (wie von VB empfohlen)](https://blog.ethereum.org/2016/07/26/onward_from_the_hard_fork/), dass sie nur auf der **ETC** Blockchain ausgeführt wird. ',
TRANSModal_Content_4        : '**Coinbase & ShapeShift: ** Sende nur Standard Transaktionen. Wenn du die Transaktion über eine der "Nur" Funktionen versendest, musst du den Support kontaktieren um deinen Betrag oder eine Rückerstattung zu erhalten. [Du kannst auch Shapeshifts "split" Werkzeug ausprobieren.](https://split.shapeshift.io/) ',
TRANSModal_Content_5        : '**Kraken & Poloniex:** Keine Probleme bekannt. Nutzen, was dir lieber ist ',
TRANSModal_Yes              : 'Cool, jetzt hab ich\'s verstanden. ',
TRANSModal_No               : 'Bitte was? Ich bin noch verwirrter. Ich brauche Hilfe ',

/* Offline Transaction */
OFFLINE_Title               : 'Erzeuge & sende Offline Transaktionen ',
OFFLINE_Desc                : 'Offline Transaktionen können in drei Schritten erzeugt werden. Schritt 1 und 3 erledigst an einem Online Computer und Schritt 3 an einem Offline/abgeschirmten Computer. Dies stellt sicher, dass deine privaten Schlüssel nie ein mit dem Internet verbundenes Gerät berühren. ',
OFFLLINE_Step1_Title        : 'Schritt 1: Informationen sammeln (Online Computer) ',
OFFLINE_Step1_Button        : 'Informationen sammeln ',
OFFLINE_Step1_Label_1       : 'Von Adresse ',
OFFLINE_Step1_Label_2       : 'Hinweis: Dies ist die VON Adresse, nicht die AN Adresse. Die Nonce wird basierend auf dem Ursprungsaccount berechnet. Wenn du einen abgeschirmten Computer nutzt, wäre dies die Adresse deines "cold-storage". ',
OFFLINE_Step2_Title         : 'Schritt 2: Transaktion generieren (Offline Computer) ',
OFFLINE_Step2_Label_1       : 'An Adresse ',
OFFLINE_Step2_Label_2       : 'Zu sendender Betrag ',
OFFLINE_Step2_Label_3       : 'Gaspreis ',
OFFLINE_Step2_Label_3b      : 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. ',
OFFLINE_Step2_Label_4       : 'Gas Limit ',
OFFLINE_Step2_Label_4b      : '21000 ist das Standard Gas Limit. Wenn du Verträge oder Daten sendest, musst du diesen Wert eventuell anpassen. Alles ungenutzte Gas wird dir zurück gesendet. ',
OFFLINE_Step2_Label_5       : 'Nonce ',
OFFLINE_Step2_Label_5b      : 'Dies wurde dir in Schritt 1 an deinem Online Computer angezeigt. ',
OFFLINE_Step2_Label_6       : 'Daten ',
OFFLINE_Step2_Label_6b      : 'Dies ist optional. Daten werden meist in Transaktionen an Verträge verwendet. ',
OFFLINE_Step2_Label_7       : 'Gib deine privaten Schlüssel ein. ',
OFFLINE_Step3_Title         : 'Schritt 3: Transaktion senden/veröffentlichen (Online Computer) ',
OFFLINE_Step3_Label_1       : 'Kopiere die signierte Transaktion aus Schritt 2 hier hinein und drücke "TRANSAKTION SENDEN". ',

/* Deploy Contracts */
DEP_generate                : 'Bytecode generieren ',
DEP_generated               : 'Generierter Bytecode ',
DEP_signtx                  : 'Transaktion signieren ',
DEP_interface               : 'Generiertes Interface ',

/* My Wallet */
MYWAL_Nick                  : 'Wallet Spitzname ',
MYWAL_Address               : 'Wallet Addresse ',
MYWAL_Bal                   : 'Guthaben ',
MYWAL_Edit                  : 'Bearbeiten ',
MYWAL_View                  : 'Ansehen ',
MYWAL_Remove                : 'Löschen ',
MYWAL_RemoveWal             : 'Wallet löschen ',
MYWAL_WatchOnly             : 'Deine Watch-Only Konten ',
MYWAL_Viewing               : 'Du siehst Wallet ',
MYWAL_Hide                  : 'Wallet Info verstecken ',
MYWAL_Edit_2                : 'Wallet bearbeiten ',
MYWAL_Name                  : 'Wallet Name ',
MYWAL_Content_1             : 'Achtung! Du bist gerade dabei dein Wallet zu löschen ',
MYWAL_Content_2             : 'Stelle sicher, dass du **die private Key/JSON Datei und das Passwort** deines Wallets gespeichert hast, bevor du es löschst. ',
MYWAL_Content_3             : 'Wenn du dieses Wallet in Zukunft mit MyEtherWallet CX verwenden willst, musst du es mittels der privaten Key/JSON Datei und deinem Passwort manuell wieder hinzufügen. ',

/* View Wallet Details */
VIEWWALLET_Subtitle         : 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. Es wird empfohlen, dies zu tun um [Deinen Account in Geth/Mist zu importieren.](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Zum Überprüfen deines Kontostands empfehlen wir, einen Blockchain Explorer wie [etherscan.io](http://etherscan.io/) zu verwenden. ',
VIEWWALLET_Subtitle_Short   : 'Dies erlaubt dir den Download verschiedener Versionen deines privaten Schlüssel sowie das erneute Drucken deines Papier-Wallets. ',
VIEWWALLET_SuccessMsg       : 'Erfolgreich! Hier sind die Daten deines Wallets. ',

/* Chrome Extension */
CX_error_1                  : 'Du hast keine Wallets gespeichert. Klicke ["Wallet hinzufügen"](/cx-wallet.html#add-wallet) um eines hinzuzufügen! ',
CX_quicksend                : 'Senden ', // Was "QuickSend". If no appropriate translation, just use "Send"

/* Node Switcher */
NODE_Title                  : 'Benutzerdefinierten Knoten einstellen',
NODE_Subtitle               : 'Verbinde mit einem lokalem Knoten...',
NODE_Warning                : 'Your node must be HTTPS in order to connect to it via MyEtherWallet.com. You can [download the MyEtherWallet repo & run it locally](https://github.com/kvhnuke/etherwallet/releases/latest) to connect to any node. Or, get free SSL certificate via [LetsEncrypt](https://letsencrypt.org/)',
NODE_Name                   : 'Knotenname',
NODE_Port                   : 'Knotenport',
NODE_CTA                    : 'Speicher & Benutze Knoten',

/* Contracts */
CONTRACT_Title              : 'Vertragsadresse ',
CONTRACT_Title_2            : 'Existierenden Vertrag auswählen ',
CONTRACT_Json               : 'ABI / JSON Schnittstelle ',
CONTRACT_Interact_Title     : 'Vertrag lesen / schreiben ',
CONTRACT_Interact_CTA       : 'Wähle eine Funktion ',
CONTRACT_ByteCode           : 'Byte Code ',
CONTRACT_Read               : 'LESEN ',
CONTRACT_Write              : 'SCHREIBEN ',

/* Swap / Exchange */
SWAP_rates                  : "Aktueller Kurs ",
SWAP_init_1                 : "Wechsel meine  ",
SWAP_init_2                 : " gegen ", // "I want to swap my X ETH for X BTC"
SWAP_init_CTA               : "Lass es uns tun! ", // or "Continue"
SWAP_information            : "Deine Informationen ",
SWAP_send_amt               : "Zusendender Betrag ",
SWAP_rec_amt                : "Empfangender Betrag ",
SWAP_your_rate              : "Dein Kurs ",
SWAP_rec_add                : "Deine Empfangsadresse ",
SWAP_start_CTA              : "Starte Wechsel ",
SWAP_ref_num                : "Deine Referenznummer ",
SWAP_time                   : "Zum Senden verbleibende Zeit   ",
SWAP_progress_1             : "Auftrag initialisiert ",
SWAP_progress_2             : "Warte auf deine ", // Waiting for your BTC...
SWAP_progress_3             : "Erhalten! ", // ETH Received!
SWAP_progress_4             : "Sende deine {{orderResult.output.currency}} ",
SWAP_progress_5             : "Auftrag erfüllt ", //Vielleicht erledigt!
SWAP_order_CTA              : "Bitte sende ", // Please send 1 ETH...
SWAP_unlock                 : "Schalte dein Wallet frei um ETH oder Tokens direkt von dieser Seite aus zu senden ",

/* Sign Message */
MSG_message                 : 'Nachticht ',
MSG_date                    : 'Datum ',
MSG_signature               : 'Signatur ',
MSG_verify                  : 'Nachricht verifizieren ',
MSG_info1                   : 'Include the current date so the signature cannot be reused on a different date. ',
MSG_info2                   : 'Include your nickname and where you use the nickname so someone else cannot use it. ',
MSG_info3                   : 'Include a specific reason for the message so it cannot be reused for a different purpose. ',

/* Mnemonic */
MNEM_1                      : 'Wähle den Vertrag, mit dem du interagieren willst. ',
MNEM_2                      : 'Your single HD mnemonic phrase can access a number of wallets / addresses. Please select the address you would like to interact with at this time. ',
MNEM_more                   : 'Mehrere Adressen ',
MNEM_prev                   : 'Letzte Adressen ',

/* Hardware wallets */
x_Ledger                    : 'Ledger Nano S ',
ADD_Ledger_1                : 'Verbinde deinen Ledger Nano S ',
ADD_Ledger_2                : 'Öffne das Ethereum Programm (oder ein Vertragsprogramm) ', //Statt Programm -> Applikation?
ADD_Ledger_3                : 'Gehe sicher, dass Browser Support aktiviert ist. ',
ADD_Ledger_4                : 'If no Browser Support is found in settings, verify that you have [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) ',
ADD_Ledger_0a               : 'Re-open MyEtherWallet on a secure (SSL) connection ',
ADD_Ledger_0b               : 'Re-open MyEtherWallet using [Chrome](https://www.google.com/chrome/browser/desktop/) or [Opera](https://www.opera.com/) ',
ADD_Ledger_scan             : 'Connect to Ledger Nano S ',
x_Trezor                    : 'TREZOR ',
ADD_Trezor_scan             : 'Connect to TREZOR ',
ADD_Trezor_select           : 'This is a TREZOR seed ',

/* Error Messages */
ERROR_0                     : 'Bitte gebe eine gültige betrag ein ',
ERROR_1                     : 'Dein Passwort muss mindestens 9 Zeichen lang sein. Bitte wähle ein sicheres Passwort. ',
ERROR_2                     : 'Oh oh! Wir haben den Typ der Wallet-Datei nicht erkannt. ',
ERROR_3                     : 'Dies ist keine gültige Wallet-Datei. ',
ERROR_4                     : 'Diese Einheit existiert nicht, bitte wähle eine dieser Einheiten aus ',
ERROR_5                     : 'Bitte gebe eine gültige Addresse ein. ',
ERROR_6                     : 'Bitte gebe eine gültige Passwort ein. ',
ERROR_7                     : 'Bitte gebe eine gültige Betrag ein. (Must be integer. Try 0-18.) ', // 7
ERROR_8                     : 'Bitte gebe eine gültige Gasverbrauch ein. (Must be integer. Try 21000-4000000.) ', // 8
ERROR_9                     : 'Bitte gebe eine gültige Datenwert ein. (Must be hex.) ', // 9
ERROR_10                    : 'Bitte gebe eine gültige Gasbetrag ein. (Must be integer. Try 20 GWEI / 20000000000 WEI.) ',
ERROR_11                    : 'Bitte gebe eine gültige Nonce ein. (Must be integer.) ', // 11
ERROR_12                    : 'Ungültige unterzeichnete Transaktion. ',
ERROR_13                    : 'Ein Wallet mit diesem Spitznamen existiert bereits. ',
ERROR_14                    : 'Wallet nicht gefunden. ',
ERROR_15                    : 'Es sieht nicht so aus als würde ein Proposal mit dieser ID existieren oder es gab einen Fehler beim Lesen des Proposal. ',
ERROR_16                    : 'Es ist bereits ein Wallet mit dieser Adresse gespeichert. Bitte überprüfe die Seite deines Wallets. ',
ERROR_17                    : 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert. Du brauchst **0.01 ETH** in deinem Account um die Gaskosten zu decken. Bitte füge ETH hinzu und versuche es noch einmal. ',
ERROR_18                    : 'Diese Transaktion würde dein gesamtes verbleibendes Gas verbrauchen. Das bedeutet, du hast bereits über dieses Proposal abgestimmt oder die Debattierphase ist zu Ende. ',
ERROR_19                    : 'Ungültiges Symbol ',
ERROR_20                    : 'Not a valid ERC-20 token ',
ERROR_21                    : 'Could not estimate gas. There are not enough funds in the account, or the receiving contract address would throw an error. Feel free to manually set the gas and proceed. The error message upon sending may be more informative. ',
ERROR_22                    : 'Bitte gebe einen gültigen Knotennamen ein ',
ERROR_23                    : 'Bitte gebe eine gültige URL ein. Falls du dich mit HTTPS verbindest, muss auch der Knoten mit HTTPS ausgestattet werden. ',
ERROR_24                    : 'Bitte gebe eine gültige Portnummer ein ',
ERROR_25                    : 'Bitte gebe eine gültige Chain-ID ein ',
ERROR_26                    : 'Bitte gebe eine gültige ABI ein ',
ERROR_27                    : 'Mindestbetrag: 0.01. Maximaler Betrag: ',
ERROR_28                    : '**Du benötigst deine Keystore-Datei & das Passwort** (oder den privaten Schlüssel) um künftig auf dein Wallet zugreifen zu können. Bitte sichere diese Datei daher auf einem externen Medium! Es gibt KEINE Möglichkeit, ein Wallet wiederherzustellen, wenn du diese Datei und das Passwort nicht sicherst. Lies die [Hilfe-Seite](https://www.myetherwallet.com/#help) für weitere Informationen. ',
ERROR_29                    : 'Bitte gebe einen gültigen Benutzer und Password ein ',
ERROR_30                    : 'Bitte gebe einen gültigen ENS Namen ein ',
ERROR_31                    : 'Bitte gebe einen gültigen Geheime Phasre ein ',
ERROR_32                    : 'Verbindung zum Knoten nicht möglich. Refresh your page, try a different node (upper right corner), check your firewall settings. If custom node, check your configs.', // 32
ERROR_33                    : 'The wallet you have unlocked does not match the owner\'s address. ', // 33
ERROR_34                    : 'The name you are attempting to reveal does not match the name you have entered. ', // 34
ERROR_35                    : 'Input address is not checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> More info</a>', // 35

SUCCESS_1                   : 'Gültige Addresse ',
SUCCESS_2                   : 'Wallet erfolgreich entschlüsselt ',
SUCCESS_3                   : 'Your TX was **broadcast to the network**. It still needs to be mined & confirmed. (1) Click the link. (2) Refresh until you can see your TX details. (3) Check that there are no red ( ! ) errors. (4) If no transaction details show after **3 HOURS** & please try sending again. TX ID:   ', //'Transaktion übermittelt. TX ID ',
SUCCESS_4                   : 'Dein Wallet wurde erfolgreich hinzugefügt ',
SUCCESS_5                   : 'Ausgewählte Datei ',
SUCCESS_6                   : 'Erfolgreich verbunden ',
SUCCESS_7                   : 'Nachtichten Signatur verifiziert',

/* Geth Error Messages */
GETH_InvalidSender          : 'Invalid sender Ungültiger Sender ',
GETH_Nonce                  : 'Nonce too low  ',
GETH_Cheap                  : 'Gaspreis zu niedrig! ', //Gas price too low for acceptance!
GETH_Balance                : 'Nicht genügend Guthaben ',
GETH_NonExistentAccount     : 'Account existiert nicht oder besitzt nicht genügend Guthaben ',
GETH_InsufficientFunds      : 'Unzureichendes Guthaben für Gasverbrauch * Gaspreis + Wert ',
GETH_IntrinsicGas           : 'Intrinsic gas too low ',
GETH_GasLimit               : 'Exceeds block gas limit ',
GETH_NegativeValue          : 'Negativer Wert ',

/* Parity Error Messages */
PARITY_AlreadyImported      : "Transaction with the same hash was already imported.",
PARITY_Old                  : "Transaction nonce is too low. Try incrementing the nonce.",
PARITY_TooCheapToReplace    : "Transaction fee is too low. There is another transaction with same nonce in the queue. Try increasing the fee or incrementing the nonce.",
PARITY_LimitReached         : "There are too many transactions in the queue. Your transaction was dropped due to limit. Try increasing the fee.",
PARITY_InsufficientGasPrice : "Transaction fee is too low. It does not satisfy your node's minimal fee (minimal: {}, got: {}). Try increasing the fee.",
PARITY_InsufficientBalance  : "Insufficient funds. Account you try to send transaction from does not have enough funds. Required {} and got: {}.",
PARITY_GasLimitExceeded     : "Transaction cost exceeds current gas limit. Limit: {}, got: {}. Try decreasing supplied gas.",
PARITY_InvalidGasLimit      : "Supplied gas is beyond limit.",

WARN_Send_Link              : 'You arrived via a link that has the address, value, gas, data fields, or transaction type (send mode) filled in for you. You can change any information before sending. Unlock your wallet to get started. ',

/* Tranlsation Info */
translate_version           : '0.5 ',
Translator_Desc             : 'Vielen Dank an unsere ÜbersetzerInnen ',
TranslatorName_1            : 'christoph2806 · K · ',
TranslatorAddr_1            : '',
/* Translator 1             : Insert Comments Here */
TranslatorName_2            : '[mawalu](https://www.myetherwallet.com/?gaslimit=21000&to=0xA6e9A24981aFB71f96C7330618139a7B34BCdEc3&value=1.0#send-transaction) · ',
TranslatorAddr_2            : '0xA6e9A24981aFB71f96C7330618139a7B34BCdEc3 ',
/* Translator 2             : Insert Comments Here */
TranslatorName_3            : '[huhn_solo](https://www.myetherwallet.com/?gaslimit=21000&to=0x1DAd1765381460db9A44846cDfA6f74c65A06B77&value=1.0#send-transaction) · ',
TranslatorAddr_3            : '0x1DAd1765381460db9A44846cDfA6f74c65A06B77 ',
/* Translator 3             : Insert Comments Here */
TranslatorName_4            : '[FelixA](https://www.myetherwallet.com/?gaslimit=21000&to=0xb6999051b0Bfad32E192e107181E0ac72bE7EE3D&value=1.0#send-transaction) · ',
TranslatorAddr_4            : '0xb6999051b0Bfad32E192e107181E0ac72bE7EE3D ',
/* Translator 4             : Insert Comments Here */
TranslatorName_5            : 'danielsun174 · ffidan61 ',
TranslatorAddr_5            : '',
/* Translator 5             : Insert Comments Here */

/* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
HELP_Warning                : 'Falls du vor dem **31.12.2015** ein Wallet generiert, oder das Repository heruntergeladen hast, bitte überprüfe deine Wallets &amp; lade eine neue Version des Repositories herunter. Klick für details. ',
HELP_Desc                   : 'Hast du das Gefühl etwas fehlt? Hast du eine andere Frage? [Schreib uns](mailto:support@myetherwallet.com) und wir werden nicht nur deine Frage beantworten, wir werden auch die Seite updaten, damit diese in der Zukunft noch einfacher zu bedienen sein wird! ',
HELP_Remind_Title           : 'Ein paar Reminder ',
HELP_Remind_Desc_1          : '**Ethereum, MyEtherWallet.com & MyEtherWallet CX, sowie einige der verwendeten Javascript Bibliotheken, die wir verwenden, befinden sich noch in Entwicklung.** Zwar haben wir alles umfassend getestet und es wurden erfolgeich tausende Wallets von Menschen aus aller Welt kreiert, jedoch bestimmt immer eine gewisse Gefahr, dass etwas unerwartetes passiert und dein Ether verloren geht. Bitte investiere nicht mehr als du verlieren kannst, und sei immer vorsichtig. Sollte etwas schlimmes passieren, **können wir uns leider nicht verantwortlich für einen Verlust zeichnen**. ',
HELP_Remind_Desc_2          : 'MyEtherWallet.com & MyEtherWallet CX sind keine "web wallets". Du erstellst keinen Account oder sendest uns Ether den wir halten. Alle Daten bleiben auf deinem Computer, bzw. Browser. Unser Auftrag ist es, dir das Erstellen, Speichern und Zugreifen auf deine Accounts zu vereinfachen, sowie dir eine simple Möglichkeit zur Interaktion mit der Blockchain zu bieten. ',
HELP_Remind_Desc_3          : 'Falls du deinen privaten Schlüssel und Passwort nicht speicherst, gibt es keine Möglichkeit den Zugriff auf das Konto und die darauf befindlichen Mittel wieder herzustellen. Bitte erstelle Back-ups und speichere deine Zugriffsdaten an verschiedenen Orten &ndash; nicht nur deinem Computer! ',

HELP_0_Title                : '0) Ich bin neu. Was soll ich machen? ',
HELP_0_Desc_1               : 'MyEtherWallet bietet dir die Möglichkeit neue Wallets zu generieren, damit du deinen Ether selbst speichern kannst, und keine Exchange nutzen musst. Dieser Prozess findet ausschließlich auf deinem Computer statt. Daher bist auch **du dafür Verantwortlich, Back-ups zu erstellen** wenn du ein Wallet verwenden möchtest. ',
HELP_0_Desc_2               : 'Erstelle ein neues Wallet. ',
HELP_0_Desc_3               : 'Erstelle ein Back-up deines Wallets. ',
HELP_0_Desc_4               : 'Verifiziere, dass du Zugriff auf dein neues Wallet hast und alle nötigen Informationen korrekt gespeichert sind. ',
HELP_0_Desc_5               : 'Überweise Ether auf das neue Wallet. ',

HELP_1_Title                : '1) Wie erstelle ich ein neues Wallet? ',
HELP_1_Desc_1               : 'Geh zur "Wallet hinzufügen" Seite. ',
HELP_1_Desc_2               : 'Geh zur "Wallet hinzufügen" Seite & wähle "Neues Wallet erstellen" aus. ',
HELP_1_Desc_3               : 'Wähle ein starkes Passwort aus. Falls du glaubst, dass du es vergessen könntest, speichere es an einem sicheren Ort ab. Du benötigst das Passwort um Transaktionen zu tätigen. ',
HELP_1_Desc_4               : 'Klicke auf "Wallet erstellen". ',
HELP_1_Desc_5               : 'Dein Wallet wurde nun erstellt. ',

HELP_2a_Title               : '2a) Wie speichere ich/erstelle Back-ups meines Wallets? ',
HELP_2a_Desc_1              : 'Du solltest dein Wallet immer an verschiedenen physischen Orten abspeichern - beispielsweise auf einem USB-Stick und/oder einem Stück Papier. ',
HELP_2a_Desc_2              : 'Speichere die Adresse. Du kannst sie für dich behalten oder mit anderen teilen. Auf diese Adresse können andere Ether an dich senden. ',
HELP_2a_Desc_3              : 'Speiche verschiedene Versionen deines privaten Schlüssels. Teile ihn nicht mit jemand anderem. Dein privater Schlüssel ist notwendig, wenn du auf deinen Ether zugreifen willst, um eine Überweisung zu tätigen! Es gibt 3 Arten des privaten Schlüssels ',
HELP_2a_Desc_4              : 'Speichere deine Adresse, die verschiedenen Versionen des privaten Schlüssels, sowie eine PDF deines Papier-Wallets in einem Ordner. Speichere diesen auf deinem Computer und einem USB-Stick. ',
HELP_2a_Desc_5              : 'Drucke das Wallet falls du einen Drucker hast. Andernfalls, schreibe deinen privaten Schlüssel und die Adresse auf ein Blatt Papier. Lagere dieses an einem sicheren Ort, abseits von deinem Computer und dem USB-Stick. ',
HELP_2a_Desc_6              : 'Bitte denk daran, dass du den Verlust des Schlüssels aufgrund des Verlusts oder Versagen deiner Festplatte, des USB-Sticks oder dem Papier, selbst verhindern musst. Erwäge daher auch Situationen wie ein Feuer oder eine Überflutung. ',

HELP_2b_Title               : '2b) How do I safely / offline / cold storage with MyEtherWallet? ',
HELP_2b_Desc_1              : 'Go to [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ',
HELP_2b_Desc_2              : 'Click on `dist-vX.X.X.X.zip`. ',
HELP_2b_Desc_3              : 'Move zip to an airgapped computer. ',
HELP_2b_Desc_4              : 'Unzip it and double-click `index.html`. ',
HELP_2b_Desc_5              : 'Generate a wallet with a strong password. ',
HELP_2b_Desc_6              : 'Save the address. Save versions of the private key. Save the password if you might not remember it forever. ',
HELP_2b_Desc_7              : 'Store these papers / USBs in multiple physically separate locations. ',
HELP_2b_Desc_8              : 'Go to the "View Wallet Info" page and type in your private key / password to ensure they are correct and access your wallet. Check that the address you wrote down is the same. ',

HELP_3_Title                : '3) How do I verify I have access to my new wallet? ',
HELP_3_Desc_1               : '**Before you send any Ether to your new wallet**, you should ensure you have access to it. ',
HELP_3_Desc_2               : 'Navigate to the "View Wallet Info" page. ',
HELP_3_Desc_3               : 'Navigate to the MyEtherWallet.com "View Wallet Info" page. ',
HELP_3_Desc_4               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_3_Desc_5               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_3_Desc_6               : 'Click the "Unlock Wallet" button. ',
HELP_3_Desc_7               : 'Your wallet information should show up. Find you account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet. ',
HELP_3_Desc_8               : 'If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly. ',

HELP_4_Title                : '4) Wie kann ich Ether von einer Wallet zur anderen senden? ',
HELP_4_Desc_1               : 'If you plan to move a large amount of ether, you should test sending a small amount to your wallet first to ensure everything goes as planned. ',
HELP_4_Desc_2               : 'Navigate to the "Sende Ether und Tokens" page. ',
HELP_4_Desc_3               : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_4_Desc_4               : 'If the wallet is encrypted, a text box will automatically appear. Enter the password. ',
HELP_4_Desc_5               : 'Click the "Unlock Wallet" button. ',
HELP_4_Desc_6               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4_Desc_7               : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4_Desc_9               : 'Click "Generate Transaction". ',
HELP_4_Desc_10              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_4_Desc_11              : 'Click the blue "Send Transaction" button below that. ',
HELP_4_Desc_12              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_4_Desc_13              : 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. ',

HELP_4CX_Title              : '4) Wie kann ich Ether über MyEtherWallet CX senden? ',
HELP_4CX_Desc_1             : 'First, you need to add a wallet. Once you have done that, you have 2 options: the "QuickSend" functionality from the Chrome Extension icon or the "Sende Ether und Tokens" page. ',
HELP_4CX_Desc_2             : 'QuickSend ',
HELP_4CX_Desc_3             : 'Click the Chrome Extension Icon. ',
HELP_4CX_Desc_4             : 'Click the "QuickSend" button. ',
HELP_4CX_Desc_5             : 'Select the wallet you wish to send from. ',
HELP_4CX_Desc_6             : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_4CX_Desc_7             : 'Enter the amount you would like to send. You can also click the "Send Entire Balance" link if you would like the transfer the entire balance. ',
HELP_4CX_Desc_8             : 'Click "Send Transaction". ',
HELP_4CX_Desc_9             : 'Verify the address and the amount you are sending is correct. ',
HELP_4CX_Desc_10            : 'Enter the password for that wallet. ',
HELP_4CX_Desc_11            : 'Click "Send Transaction." ',
HELP_4CX_Desc_12            : 'Using "Sende Ether und Tokens" Page ',

HELP_5_Title                : '5) Wie kann ich MyEtherWallet.com offline/lokal starten? ',
HELP_5_Desc_1               : 'You can run MyEtherWallet.com on your computer instead of from the GitHub servers. You can generate a wallet completely offline and send transactions from the "Offline Transaction" page. ',
HELP_5_Desc_7               : 'MyEtherWallet.com is now running entirely on your computer. ',
HELP_5_Desc_8               : 'In case you are not familiar, you need to keep the entire folder in order to run the website, not just `index.html`. Don\'t touch or move anything around in the folder. If you are storing a backup of the MyEtherWallet repo for the future, we recommend just storing the ZIP so you can be sure the folder contents stay intact. ',
HELP_5_Desc_9               : 'As we are constantly updating MyEtherWallet.com, we recommend you periodically update your saved version of the repo. ',

HELP_5CX_Title              : '5) How can I install this extension from the repo instead of the Chrome Store? ',
HELP_5CX_Desc_2             : 'Click on `chrome-extension-vX.X.X.X.zip` and unzip it. ',
HELP_5CX_Desc_3             : 'Go to Google Chrome and find you settings (in the menu in the upper right). ',
HELP_5CX_Desc_4             : 'Click "Extensions" on the left. ',
HELP_5CX_Desc_5             : 'Check the "Developer Mode" button at the top of that page. ',
HELP_5CX_Desc_6             : 'Click the "Load unpacked extension..." button. ',
HELP_5CX_Desc_7             : 'Navigate to the now-unzipped folder that you downloaded earlier. Click "select". ',
HELP_5CX_Desc_8             : 'The extension should now show up in your extensions and in your Chrome Extension bar. ',

HELP_7_Title                : '7) How do I send Tokens & add custom tokens? ',
HELP_7_Desc_0               : '[Ethplorer.io](https://ethplorer.io/) is a great way to explore tokens and find the decimals of a token. ',
HELP_7_Desc_1               : 'Navigate to the "Sende Ether und Tokens" page. ',
HELP_7_Desc_2               : 'Unlock your wallet. ',
HELP_7_Desc_3               : 'Enter the address you would like to send to in the "To Address:" field. ',
HELP_7_Desc_4               : 'Enter the amount you would like to send. ',
HELP_7_Desc_5               : 'Select which token you would like to send. ',
HELP_7_Desc_6               : 'If you do not see the token listed ',
HELP_7_Desc_7               : 'Click "Custom". ',
HELP_7_Desc_8               : 'Enter the address, name, and decimals of the token. These are provided by the developers of the token and are also needed when you "Add a Watch Token" to Mist. ',
HELP_7_Desc_9               : 'Click "Save". ',
HELP_7_Desc_10              : 'You can now send that token as well as see it\'s balance in the sidebar. ',
HELP_7_Desc_11              : 'Click "Generate Transaction". ',
HELP_7_Desc_12              : 'A couple more fields will appear. This is your browser generating the transaction. ',
HELP_7_Desc_13              : 'Click the blue "Send Transaction" button below that. ',
HELP_7_Desc_14              : 'A pop-up will appear. Verify that the amount and the address you are sending to are correct. Then click "Yes, I am sure! Make transaction." button. ',
HELP_7_Desc_15              : 'The transaction will be submitted. The TX ID will display. You can click that TX ID to see it on the blockchain. ',

HELP_8_Title                : '8) What happens if your site goes down? ',
HELP_8_Desc_1               : 'MyEtherWallet is not a web wallet. You don\'t have a login and nothing ever gets saved to our servers. It is simply an interface that allows you interact with the blockchain. ',
HELP_8_Desc_2               : 'If MyEtherWallet.com goes down, you would have to find another way (like geth or Ethereum Wallet / Mist) to do what we are doing. But you wouldn\'t have to "get" your Ether out of MyEtherWallet because it\'s not in MyEtherWallet. It\'s in whatever wallet your generated via our site. ',
HELP_8_Desc_3               : 'You can import your unencrypted private key and your Geth/Mist Format (encrypted) files directly into geth / Ethereum Wallet / Mist very easily now. See question #12 below. ',
HELP_8_Desc_4               : 'In addition, the likelihood of us taking MyEtherWallet down is slim to none. It costs us almost nothing to maintain as we aren\'t storing any information. If we do take the domain down, it still is, and always will be, publicly available at [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). You can download the ZIP there and run it locally. ',

HELP_8CX_Title              : '8) What happens if MyEtherWallet CX disappears? ',
HELP_8CX_Desc_1             : 'First, all data is saved on your computer, not our servers. I know it can be confusing, but when you look at the Chrome Extension, you are NOT looking at stuff saved on our servers somewhere - it\'s all saved on your own computer. ',
HELP_8CX_Desc_2             : 'That said, it is **very important** that you back up all your information for any new wallets generated with MyEtherWallet CX. That way if anything happens to MyEtherWallet CX or your computer, you still have all the information necessary to access your Ether. See the #2a for how to back up your wallets. ',
HELP_8CX_Desc_3             : 'If for some reason MyEtherWallet CX disappears from the Chrome Store, you can find the source on Github and load it manually. See #5 above. ',

HELP_9_Title                : '9) Is the "Sende Ether und Tokens" page offline? ',
HELP_9_Desc_1               : 'No. It needs the internet in order to get the current gas price, nonce of your account, and broadcast the transaction (aka "send"). However, it only sends the signed transaction. Your private key safely stays with you. We also now provide an "Offline Transaction" page so that you can ensure your private keys are on an offline/airgapped computer at all times. ',

HELP_10_Title               : '10) How do I make an offline transaction? ',
HELP_10_Desc_1              : 'Navigate to the "Offline Transaction" page via your online computer. ',
HELP_10_Desc_2              : 'Enter the "From Address". Please note, this is the address you are sending FROM, not TO. This generates the nonce and gas price. ',
HELP_10_Desc_3              : 'Move to your offline computer. Enter the "TO ADDRESS" and the "AMOUNT" you wish to send. ',
HELP_10_Desc_4              : 'Enter the "GAS PRICE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_5              : 'Enter the "NONCE" as it was displayed to you on your online computer in step #1. ',
HELP_10_Desc_6              : 'The "GAS LIMIT" has a default value of 21000. This will cover a standard transaction. If you are sending to a contract or are including additional data with your transaction, you will need to increase the gas limit. Any excess gas will be returned to you. ',
HELP_10_Desc_7              : 'If you wish, enter some data. If you enter data, you will need to include more than the 21000 default gas limit. All data is in HEX format. ',
HELP_10_Desc_8              : 'Select your wallet file -or- your private key and unlock your wallet. ',
HELP_10_Desc_9              : 'Press the "GENERATE SIGNED TRANSACTION" button. ',
HELP_10_Desc_10             : 'The data field below this button will populate with your signed transaction. Copy this and move it back to your online computer. ',
HELP_10_Desc_11             : 'On your online computer, paste the signed transaction into the text field in step #3 and click send. This will broadcast your transaction. ',

HELP_12_Title               : '12) How do I import a wallet created with MyEtherWallet into geth / Ethereum Wallet / Mist? ',
HELP_12_Desc_1              : 'Using an Geth/Mist JSON file from MyEtherWallet v2+.... ',
HELP_12_Desc_2              : 'Go to the "View Wallet Info" page. ',
HELP_12_Desc_3              : 'Unlock your wallet using your **encrypted** private key or JSON file. ',
HELP_12_Desc_4              : 'Go to the "My Wallets" page. ',
HELP_12_Desc_5              : 'Select the wallet you want to import into Mist, click the "View" icon, enter your password, and access your wallet. ',
HELP_12_Desc_6              : 'Find the "Download JSON file - Geth/Mist Format (encrypted)" section. Press the "Download" button below that. You now have your keystore file. ',
HELP_12_Desc_7              : 'Open the Ethereum Wallet application. ',
HELP_12_Desc_8              : 'In the menu bar, go "Accounts" -> "Backup" -> "Accounts" ',
HELP_12_Desc_9              : 'This will open your keystore folder. Copy the file you just downloaded (`UTC--2016-04-14......../`) into that keystore folder. ',
HELP_12_Desc_10             : 'Your account should show up immediately under "Accounts." ',
HELP_12_Desc_11             : 'Using your unencrypted private key... ',
HELP_12_Desc_12             : 'If you do not already have your unencrypted private key, navigate to the "View Wallet Details" page. ',
HELP_12_Desc_13             : 'Select your wallet file -or- enter/paste your private key to unlock your wallet. ',
HELP_12_Desc_14             : 'Copy Your Private Key (unencrypted). ',
HELP_12_Desc_15             : 'If you are on a Mac ',
HELP_12_Desc_15b            : 'Wenn du an einem PC bist ',
HELP_12_Desc_16             : 'Open Text Edit and paste this private key. ',
HELP_12_Desc_17             : 'Go to the menu bar and click "Format" -> "Make Plain Text". ',
HELP_12_Desc_18             : 'Save this file to your `desktop/` as `nothing_special_delete_me.txt`. Make sure it says "UTF-8" and "If no extension is provided use .txt" in the save dialog. ',
HELP_12_Desc_19             : 'Open terminal and run the following command: `geth account import ~/Desktop/nothing_special_delete_me.txt` ',
HELP_12_Desc_20             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_21             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_22             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',
HELP_12_Desc_23             : 'Open Notepad & paste the private key ',
HELP_12_Desc_24             : 'Save the file as `nothing_special_delete_me.txt` at `C:` ',
HELP_12_Desc_25             : 'Run the command, `geth account import C:\\nothing_special_delete_me.txt` ',
HELP_12_Desc_26             : 'This will prompt you to make a new password. This is the password you will use in geth / Ethereum Wallet / Mist whenever you send a transaction, so don\'t forget it. ',
HELP_12_Desc_27             : 'After successful import, delete `nothing_special_delete_me.txt` ',
HELP_12_Desc_28             : 'The next time you open the Ethereum Wallet application, your account will be listed under "Accounts". ',

HELP_13_Title               : '13) What does "Insufficient funds. Account you try to send transaction from does not have enough funds. Required XXXXXXXXXXXXXXXXXXX and got: XXXXXXXXXXXXXXXX." Mean? ',
HELP_13_Desc_1              : 'This means you do not have enough Ether in your account to cover the cost of gas. Each transaction (including token and contract transactions) require gas and that gas is paid in Ether. The number displayed is the amount required to cover the cost of the transaction in Wei. Take that number, divide by `1000000000000000000`, and subtract the amount of Ether you were trying to send (if you were attempting to send Ether). This will give you the amount of Ether you need to send to that account to make the transaction. ',

HELP_14_Title               : '14) Some sites randomize (seed) the private key generation via mouse movements. MyEtherWallet.com doesn\'t do this. Is the random number generation for MyEtherWallet safe? ',
HELP_14_Desc_1              : 'While the mouse moving thing is clever and we understand why people like it, the reality is window.crypto ensures more entropy than your mouse movements. The mouse movements aren\'t unsafe, it\'s just that we (and tons of other crypto experiments) believe in window.crypto. In addition, MyEtherWallet.com can be used on touch devices. Here\'s a [conversation between an angry redditor and Vitalik Buterin regarding mouse movements v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

HELP_15_Title               : '15) Why hasn\'t the account I just created show up in the blockchain explorer? (ie: etherchain, etherscan) ',
HELP_15_Desc_1              : 'Accounts will only show up in a blockchain explorer once the account has activity on it&mdash;for example, once you have transferred some Ether to it. ',

HELP_16_Title               : '16) How do I check the balance of my account? ',
HELP_16_Desc_1              : 'You can use a blockchain explorer like [etherscan.io](http://etherscan.io/). Paste your address into the search bar and it will pull up your address and transaction history. For example, here\'s what our [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) looks like on etherscan.io ',

HELP_17_Title               : '17) Why isn\'t my balance showing up when I unlock my wallet? ',
HELP_17_Desc_1              : 'This is most likely due to the fact that you are behind a firewall. The API that we use to get the balance and convert said balance is often blocked by firewalls for whatever reason. You will still be able to send transactions, you just need to use a different method to see said balance, like etherscan.io ',

HELP_18_Title               : '18) Where is my geth wallet file? ',

HELP_19_Title               : '19) Where is my Mist wallet file? ',
HELP_19_Desc_1              : 'Mist files are typically found in the file locations above, but it\'s much easier to open Mist, select "Accounts" in the top bar, select "Backup", and select "Accounts". This will open the folder where your files are stored. ',

HELP_20_Title               : '20) Where is my pre-sale wallet file? ',
HELP_20_Desc_1              : 'Wherever you saved it. ;) It also was emailed to you, so check there. Look for the file called `"ethereum_wallet_backup.json"` and select that file. This wallet file will be encrypted with a password that you created during the purchase of the pre-sale. ',

HELP_21_Title               : '21) Couldn\'t everybody put in random private keys, look for a balance, and send to their own address? ',
HELP_21_Desc_1              : 'Short version: yes, but finding an account with a balance would take longer than the universe...so...no. ',
HELP_21_Desc_2              : 'Long ELI5 Version: So Ethereum is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), specifically [Elliptic curve cryptography](https://eprint.iacr.org/2013/734.pdf) which is very widely used, not just in Ethereum. Most servers are protected via ECC. Bitcoin uses the same, as well as SSH and TLS and a lot of other stuff. The Ethereum keys specifically are 256-bit keys, which are stronger than 128-bit and 192-bit, which are also widely used and still considered secure by experts. ',
HELP_21_Desc_3              : 'In this you have a private key and a public key. The private key can derive the public key, but the public key cannot be turned back into the private key. The fact that the internet and the world’s secrets are using this cryptography means that if there is a way to go from public key to private key, your lost ether is the least of everyone’s problems. ',
HELP_21_Desc_4              : 'Now, that said, YES if someone else has your private key then they can indeed send ether from your account. Just like if someone has your password to your email, they can read and send your email, or the password to your bank account, they could make transfers. You could download the Keystore version of your private key which is the private key that is encrypted with a password. This is like having a password that is also protected by another password. ',
HELP_21_Desc_5              : 'And YES, in theory you could just type in a string of 64 hexadecimal characters until you got one that matched. In fact, smart people could write a program to very quickly check random private keys. This is known as "brute-forcing" or "mining" private keys. People have thought about this long and hard. With a few very high end servers, they may be able to check 1M+ keys / second. However, even checking that many per second would not yield access to make the cost of running those servers even close to worthwhile - it is more likely you, and your great-grandchildren, will die before getting a match. ',
HELP_21_Desc_6              : 'If you know anything about Bitcoin, [this will put it in perspective:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ',
HELP_21_Desc_7              : '[If you want something a bit more technical:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ',
HELP_21_Desc_8              : 'Of course, this all assumes that keys are generated in a truly random way & with sufficient entropy. The keys generated here meet that criteria, as do Jaxx and Mist/geth. The Ethereum wallets are all pretty good. Keys generated by brainwallets do not, as a person\'s brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that\'s a separate issue that can wait for another day. ',

HELP_SecCX_Title            : 'Security - MyEtherWallet CX ',
HELP_SecCX_Desc_1           : 'Where is this extension saving my information? ',
HELP_SecCX_Desc_2           : 'The information you store in this Chrome Extension is saved via [chrome.storage](http://chrome.storage/). - this is the same place your passwords are saved when you save your password in Chrome. ',
HELP_SecCX_Desc_3           : 'What information is saved? ',
HELP_SecCX_Desc_4           : 'The address, nickname, private key is stored in chrome.storage. The private key is encrypted using the password you set when you added the wallet. The nickname and wallet address is not encrypted. ',
HELP_SecCX_Desc_5           : 'Why aren\'t the nickname and wallet address encrypted? ',
HELP_SecCX_Desc_6           : 'If we were to encrypt these items, you would need to enter a password each time you wanted to view your account balance or view the nicknames. If this concerns you, we recommend you use MyEtherWallet.com instead of this Chrome Extension. ',

HELP_Sec_Title              : 'Security ',
HELP_Sec_Desc_1             : 'If one of your first questions is "Why should I trust these people?", that is a good thing. Hopefully the following will help ease your fears. ',
HELP_Sec_Desc_2             : 'We\'ve been up and running since August 2015. If you search for ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), you can see numerous people who use us with great success. ',
HELP_Sec_Desc_3             : 'We aren\'t going to take your money or steal your private key(s). There is no malicious code on this site. In fact the "GENERATE WALLET" pages are completely client-side. That means that all the code is executed on ** your computer** and it is never saved and transmitted anywhere. ',
HELP_Sec_Desc_4             : 'Check the URL -- This site is being served through GitHub and you can see the source code here: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) to [https://www.myetherwallet.com](https://www.myetherwallet.com). ',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

HELP_FAQ_Title              : 'More Helpful Answers to Frequent Questions ',
HELP_Contact_Title          : 'Ways to Get in Touch'
};

module.exports = de;
