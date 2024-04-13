from pydantic import BaseModel

from .certificate import Certificate  # noqa: F401
from .dns import DNS  # noqa: F401
from .favicon import Favicon  # noqa: F401
from .fingerprint import Fingerprint  # noqa: F401
from .html import HTML  # noqa: F401
from .resource import Resource  # noqa: F401
from .tls import TLS  # noqa: F401
from .tracker import Tracker  # noqa: F401
from .whois import Whois  # noqa: F401


class Count(BaseModel):
    count: int
